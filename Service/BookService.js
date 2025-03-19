const getAllBookCategories = async () => {
  try {
    const data = await fetch(
      "https://nextjs-homework005.vercel.app/api/book_category"
    );
    const result = await data.json();
    return result;
  } catch (error) {}
};

const getAllBook = async () => {
  try {
    const data = await fetch("https://nextjs-homework005.vercel.app/api/book");
    const result = await data.json();
    return result;
  } catch (error) {}
};

const getBookById = async (id) => {
  try {
    const data = await fetch(
      `https://nextjs-homework005.vercel.app/api/book/${id}`
    );
    const result = await data.json();
    return result;
  } catch (error) {}
};

const getBookByTitle = async (title) => {
  try {
    const data = await fetch(
      `https://nextjs-homework005.vercel.app/api/book?search=${title}`
    );
    const result = await data.json();
    return result;
  } catch (error) {}
};

const getBookByCategory = async (query) => {
  try {
    const data = await fetch(
      `https://nextjs-homework005.vercel.app/api/book?query=${query}`
    );
    const result = await data.json();
    console.log(result);
    return result;
  } catch (error) {}
};

export {
  getAllBookCategories,
  getAllBook,
  getBookById,
  getBookByTitle,
  getBookByCategory,
};
