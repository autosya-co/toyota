import type { APIRoute } from 'astro';
import { VertexAI } from '@google-cloud/vertexai';
import { getFileContent, updateFileContent } from '../../lib/github';

export const POST: APIRoute = async ({ request }) => {
  try {
    const { prompt, filePath, action } = await request.json();

    if (!prompt || !filePath) {
      return new Response(JSON.stringify({ error: 'Faltan parámetros: prompt o filePath' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // 1. Obtener contenido actual del archivo desde GitHub
    const { content, sha } = await getFileContent(filePath);

    // 2. Inicializar Vertex AI
    const project = import.meta.env.VERTEX_AI_PROJECT || 'toyotausados';
    const location = import.meta.env.VERTEX_AI_LOCATION || 'us-central1';
    
    console.log(`[AI-Agent] Usando Proyecto: ${project}, Ubicación: ${location}`);

    const vertexAI = new VertexAI({ project: project, location: location });

    const generativeModel = vertexAI.getGenerativeModel({
      model: 'gemini-1.5-flash-001',
    });

    const fullPrompt = `
      Eres un Agente Constructor experto en Astro 6 y Tailwind CSS 4.
      Tu tarea es modificar el código fuente de un archivo basado en la instrucción del usuario.
      
      CONTENIDO ACTUAL DEL ARCHIVO (${filePath}):
      \`\`\`
      ${content}
      \`\`\`
      
      INSTRUCCIÓN DEL USUARIO:
      ${prompt}
      
      REGLAS:
      1. Retorna ÚNICAMENTE el código completo y actualizado del archivo.
      2. No añadas explicaciones, ni bloques de markdown (como \`\`\`astro).
      3. Mantén el estilo y la estructura existente del proyecto.
      4. Si la instrucción no es clara o no se puede realizar, retorna el código original sin cambios.
    `;

    const requestPayload = {
      contents: [{ role: 'user', parts: [{ text: fullPrompt }] }],
    };

    const result = await generativeModel.generateContent(requestPayload);
    const response = result.response;
    
    if (!response.candidates || response.candidates.length === 0 || !response.candidates[0].content.parts[0].text) {
      throw new Error('La IA no generó una respuesta válida');
    }

    const generatedCode = response.candidates[0].content.parts[0].text.trim();

    // Limpiar posibles bloques markdown si el modelo los incluyó a pesar de la instrucción
    const cleanCode = generatedCode.replace(/^```[a-z]*\n/i, '').replace(/\n```$/i, '');

    // 3. Acciones: 'preview' solo retorna el código, 'push' realiza el commit
    if (action === 'push') {
      const commitMessage = `AI Builder: ${prompt.substring(0, 50)}...`;
      await updateFileContent(filePath, cleanCode, sha, commitMessage);
      
      return new Response(JSON.stringify({ 
        success: true, 
        message: 'Cambio pusheado a producción con éxito',
        code: cleanCode 
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Por defecto (preview)
    return new Response(JSON.stringify({ 
      success: true, 
      code: cleanCode 
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error: any) {
    console.error('Error en AI Agent:', error);
    return new Response(JSON.stringify({ 
      error: 'Error procesando la solicitud', 
      details: error.message 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
