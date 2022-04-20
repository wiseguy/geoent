//const mapboxToken = ;
export function getMapboxToken() {
  console.log("mapboxToken");
  console.log(process.env.NEXT_PUBLIC_MAPBOX_TOKEN);

  return process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
}
