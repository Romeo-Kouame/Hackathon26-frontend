/* eslint-disable @typescript-eslint/no-non-null-assertion */
import axios from "axios";
import { notify } from "../components/toast/toast.tsx";
import secureLocalStorage from "react-secure-storage";

const apiUrl = process.env.REACT_APP_API_URL;

export const handleServiceGetTeams = async (data: object) => {
  axios.defaults.headers.common["Authorization"] =
    "Bearer " + secureLocalStorage.getItem("session_token");

  try {
    const uri = `${apiUrl}/api/groupe/render`;
    const response = await axios.post(uri, data);

    if (response.data?.status === true) {
      notify("success", "Liste mise à jour");
      return response.data.data?.equipes ?? [];
    } else {
      notify("error", response.data?.message ?? "Erreur serveur");
      return [];
    }
  } catch (error) {
    notify("error", "Une erreur s'est produite");
    return [];
  }
};
