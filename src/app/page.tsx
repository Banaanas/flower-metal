import { fetchGoogleSheet } from "@/lib/api/fetch-google-sheet";

const HomePage = async () => {
  const googleSheetData = await fetchGoogleSheet();

  return <div>hola</div>;
};

export default HomePage;
