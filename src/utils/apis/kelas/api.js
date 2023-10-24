import axiosWithConfig from "@/utils/apis/axiosWithConfig";

export const getKelas = async () => {
  try {
    // GANTI LINK
    const response = await axiosWithConfig.get("/kelas");

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
    const response = await axiosWithConfig.post("/kelas", newData);

    return response.data;
  } catch (error) {
    throw Error("Gagal membuat kelas baru");
  }
};

export const getDetailKelas = async (kelasId) => {
  try {
    const response = await axiosWithConfig.get(`/kelas/${kelasId}`);

    return response.data;
  } catch (error) {
    throw Error("Gagal mendapatkan detail kelas" + error);
  }
};

export const updatelKelas = async (data) => {
  try {
    const response = await axiosWithConfig.put(`/kelas/${data.id}`, data.data);

    return response.data;
  } catch (error) {
    console.log(data.id);
    throw Error("Gagal memperbaharui kelas");
  }
};

export const deletelKelas = async (kelasId) => {
  try {
    const response = await axiosWithConfig.delete(`/kelas/${kelasId}`);

    return response.data;
  } catch (error) {
    throw Error("Gagal menghapus kelas");
  }
};
