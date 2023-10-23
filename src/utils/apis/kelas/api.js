import axiosWithConfig from "@/utils/apis/axiosWithConfig";

export const getKelas = async () => {
  try {
    // GANTI LINK
    const response = await axiosWithConfig.get("/products");

    return response.data;
  } catch (error) {
    throw Error("Gagal mendapatkan daftar kelas");
  }
};

export const createKelas = async (data) => {
  try {
    const newData = {
      ...data,
    };
    // GANTI LINK
    const response = await axiosWithConfig.post("/products", newData);

    return response.data;
  } catch (error) {
    throw Error("Gagal membuat kelas baru");
  }
};

export const getDetailKelas = async (kelasId) => {
  try {
    // GANTI LINK
    const response = await axiosWithConfig.get(`/products/${id}`);

    return response.data;
  } catch (error) {
    throw Error("Gagal memperbaharui kelas");
  }
};

export const updatelKelas = async (data) => {
  const { id } = data;
  try {
    const newData = {
      ...data,
    };
    // GANTI LINK
    const response = await axiosWithConfig.put(`/products/${id}`, newData);

    return response.data;
  } catch (error) {
    throw Error("Gagal memperbaharui kelas");
  }
};
export const deletelKelas = async (kelasId) => {
  try {
    // GANTI LINK
    const response = await axiosWithConfig.delete(`/products/${id}`, newData);

    return response.data;
  } catch (error) {
    throw Error("Gagal menghapus kelas");
  }
};
