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
