const getAllCartoonGenre = async () => {
  try {
    const data = await fetch(
      "https://nextjs-homework005.vercel.app/api/cartoon_genre"
    );
    const result = await data.json();
    return result;
  } catch (error) {}
};

const getAllCartoon = async () => {
  try {
    const data = await fetch(
      "https://nextjs-homework005.vercel.app/api/cartoon"
    );
    const result = await data.json();
    return result;
  } catch (error) {}
};

const getCartoonById = async (id) => {
  try {
    const data = await fetch(
      `https://nextjs-homework005.vercel.app/api/cartoon/${id}`
    );
    const result = await data.json();
    return result;
  } catch (error) {}
};

const getCartoonByTitle = async (title) => {
  try {
    const data = await fetch(
      `https://nextjs-homework005.vercel.app/api/cartoon?search=${title}`
    );
    const result = await data.json();
    return result;
  } catch (error) {}
};

const getCartoonByGenre = async (query) => {
  try {
    const data = await fetch(
      `https://nextjs-homework005.vercel.app/api/cartoon?genre=${query}`
    );
    const result = await data.json();
    return result;
  } catch (error) {}
};

export {
  getAllCartoonGenre,
  getAllCartoon,
  getCartoonById,
  getCartoonByTitle,
  getCartoonByGenre,
};
