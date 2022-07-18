const TableRanked = (props) => {


    return (
        <>
<h1 class = 'font-bold text-2xl mb-7 mt-14 text-center'>RANKED KEYWORDS - <span class = 'text-blue-700'>HIGH PERFORMANCE</span></h1>

<div class="overflow-x-auto xl:container mx-auto block text-center items-center justify-center relative   sm:rounded-lg">
    <table class=" text-sm text-center w-fit  mx-auto block  shadow-lg border-2  border-indigo-200 text-white">
        <thead class="text-xs  uppercase text-white">
            <tr>
                <th class="py-3 px-6  bg-gray-800">
                    Keywords
                </th>
                <th class="py-3 px-6 bg-gray-900">
                    Search Volume (Demand)
                </th>
                <th  class="py-3 px-6  bg-gray-800">
                    Search Results (Supply)
                </th>
                <th  class="py-3 px-6 bg-gray-900">
                    Demand Index
                </th>
                <th class="py-3 px-6 bg-gray-800">
                    Rank in SERPs
                </th>
            </tr>
        </thead>
        <tbody>

            {
                props.data.map(keyword=> {
                    return (
                        <tr class="border-b border-gray-800">
                <th scope="row" class="py-4 px-6 font-medium uppercase  whitespace-nowrap text-white bg-gray-800">
                   {keyword.keyWord}
                </th>
                <td class="py-4 px-6 bg-gray-900">
                {keyword.searchVolume}

                </td>
                <td class="py-4 px-6  bg-gray-800">
                {keyword.searchResults}

                </td>
                <td class="py-4 px-6 bg-gray-900">
                {(parseFloat(keyword.searchVolume)/parseFloat(keyword.searchResults)).toFixed(1)}

                </td>
                <td class="py-4 px-6 bg-gray-800">
                {keyword.rank}
                </td>
            </tr>
                    )
                })
            }
           
        </tbody>
    </table>
</div>

        
        
        
        </>
    )
}

export default TableRanked