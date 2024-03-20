import { apiURL } from "@/utils/constants/api";

export default async function handler(req, res) {
  try {
    const respose = await fetch(apiURL);
    const { success, user } = await respose.json();
    if (success) {
      return res.status(200).json({ success: true, user });
    }
  } catch (error) {
    return res.status(200).json({ success: false, user: null });
  }
}
