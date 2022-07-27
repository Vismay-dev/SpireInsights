const TableRanked = (props) => {
  return (
    <>
      <h1 class="font-bold text-2xl lg:mb-7 lg:mt-14 mt-10 text-center">
        RANKED KEYWORDS - <span class="text-blue-700">HIGH PERFORMANCE</span>
      </h1>
      <h2 class="lg:hidden block mt-2 mb-7 font-semibold text-center text-xl">
        (Scroll Horizontally)
      </h2>
      <div class="overflow-x-auto container  sm:w-[100%] w-[360px]  mx-auto block text-center items-center justify-center relative  ">
        <table class=" text-sm text-center w-fit h-[600px] overflow-y-scroll mx-auto block  shadow-lg border-2  border-indigo-200 text-white">
          <thead class="text-sm sticky top-0 font-bold uppercase text-white">
            <tr>
              <th class="py-4 px-4 font-bold bg-gray-900">S NO.</th>
              <th class="py-4 px-4 font-bold bg-gray-800">Keywords</th>
              <th class="py-4 px-4 font-bold bg-gray-900">
                Search Volume (Demand)
              </th>
              <th class="py-4 px-4 font-bold  bg-gray-800">
                Search Results (Supply)
              </th>
              <th class="py-4 px-4 font-bold bg-gray-900">Demand Index</th>
              <th class="py-4 px-4 font-bold bg-gray-800">Rank in SERPs</th>
            </tr>
          </thead>
          <tbody>
            {props &&
              props.data &&
              props.data.length > 0 &&
              props.data.map((keyword, i) => {
                return (
                  <tr class="  border-gray-200">
                    <th
                      scope="row"
                      class="py-4 px-4 font-bold uppercase  whitespace-nowrap text-white bg-gray-900"
                    >
                      {i + 1}
                    </th>
                    <th
                      scope="row"
                      class="py-4 px-4 font-bold uppercase  whitespace-nowrap text-white bg-gray-800"
                    >
                      {keyword.keyWord}
                    </th>
                    <td class="py-4 px-4 font-bold bg-gray-900">
                      {keyword.searchVolume}
                    </td>
                    <td class="py-4 px-4 font-bold  bg-gray-800">
                      {keyword.searchResults}
                    </td>
                    <td class="py-4 px-4 font-bold bg-gray-900">
                      {(
                        parseFloat(keyword.searchVolume) /
                        parseFloat(keyword.searchResults)
                      ).toFixed(1)}
                    </td>
                    <td class="py-4 px-4 font-bold bg-gray-800">
                      {keyword.rank}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableRanked;
