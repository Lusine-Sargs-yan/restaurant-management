export function getVisibleData(totalData, pageNumber, perPageData){

  const endIndex = pageNumber * perPageData;
  const startIndex = endIndex - perPageData;

  return totalData.slice(startIndex, endIndex);
}
