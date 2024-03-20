import { API_URL } from "@/src/utils/contants/api";

export default async function handler(req, res) {
  try {
    const respose = await fetch(API_URL);
    const { success, user } = await respose.json();
    if (success) {
      return res.status(200).json({ success: true, user });
    }
  } catch (error) {
    return res.status(200).json({ success: false, user: null });
  }
}
