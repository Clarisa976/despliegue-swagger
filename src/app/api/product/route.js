/**
 * @swagger
 * /api/product:
 *   get:
 *     summary: Obtiene un producto.
 *     description: Retorna los detalles de un producto específico. Se puede pasar el ID del producto como parámetro de consulta.
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: number
 *         description: ID del producto a obtener.
 *     responses:
 *       200:
 *         description: Detalles del producto.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: number
 *                   example: 1
 *                 name:
 *                   type: string
 *                   example: "Producto A"
 */
export async function POST(req) {
    try {
      const body = await req.json();
      
      if (!body.name || !body.price) {
        return Response.json({ message: "Nombre y precio son requeridos" }, { status: 400 });
      }
  
      return Response.json({ message: "Producto agregado", product: body }, { status: 201 });
    } catch (error) {
      return Response.json({ message: "Error en la solicitud" }, { status: 500 });
    }
  }
  