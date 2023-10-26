import axiosWithConfig from "@/utils/apis/axiosWithConfig";

export const getMeetinglKelas = async () => {
  try {
    const response = await axiosWithConfig.get(`/meeting/`);

    return response.data;
  } catch (error) {
    throw Error("Gagal mendapatkan detail kelas" + error);
  }
};

export const getDetailMeeting = async (meetingId) => {
  try {
    const response = await axiosWithConfig.get(`/meeting/${meetingId}`);

    return response.data;
  } catch (error) {
    throw Error("Gagal mendapatkan detail kelas") + error;
  }
};

export const createMeeting = async (data) => {
  try {
    const newData = {
      ...data,
    };

    const response = await axiosWithConfig.post("/meeting", newData);

    return response.data;
  } catch (error) {
    throw error("Gagal Membuat Kelas Baru");
  }
};

// Delete
export const deleteMeeting = async (meetingId) => {
  try {
    const response = await axiosWithConfig.delete(`/meeting/${meetingId}`);

    return response.data;
  } catch (error) {
    throw Error("Gagal menghapus pertemuan");
  }
};

// Update
export const updateMeeting = async (data) => {
  try {
    const response = await axiosWithConfig.put(
      `/meeting/${data.id}`,
      data.requestData
    );

    console.log(response);
    return response.data;
  } catch (error) {
    throw error("Gagal memperbahrui pertemuan");
  }
};
