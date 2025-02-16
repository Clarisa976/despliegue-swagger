/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Obtiene la lista de usuarios.
 *     description: Retorna un arreglo con todos los usuarios registrados.
 *     responses:
 *       200:
 *         description: Lista de usuarios obtenida correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: number
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: "Usuario A"
 */
export async function GET() {
    const users = [
      { id: 1, name: "Juan Pérez", email: "juan@example.com" },
      { id: 2, name: "María López", email: "maria@example.com" },
      { id: 3, name: "Carlos Gómez", email: "carlos@example.com" }

    ];
    
    return Response.json(users, { status: 200 });
  }
  