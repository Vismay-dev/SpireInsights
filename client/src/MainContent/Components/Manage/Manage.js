import image from './image.png'

const Manage = () => {

    return (
        <>
            <div class = 'relative mx-auto  w-fit'>
            <h1 class = 'sm:text-4xl text-3xl font-bold mt-[40px] mb-4 bottom-2 relative text-center'>Manage Your Listings</h1>
            <hr class = 'relative top-1 w-[140%] mt-1 border-t-2 border-blue-700 border-dashed right-[20%]'/>

            </div>
           
                    <div class = 'bg-gradient-to-br w-full text-center from-blue-100 to-indigo-100 pt-[40px] pb-[20px]  md:h-[560px] sm:h-[580px] h-[510px]'>
                    <p class = 'font-medium sm:top-3 top-[6px] sm:px-14 px-6 block mx-auto text-center relative sm:mb-1 -mb-1.5'>  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline relative bottom-[1.3px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg> This feature is currently <strong>unavailable</strong>....<br/> You'll be able to  <strong>streamline the management of all your product listings in one place</strong>, soon.</p>
                    <img class = 'mx-auto block sm:w-[300px] w-[240px] left-[3px] relative top-[52px]' src = {image}></img>
                        </div>

        
        </>
    )
}

export default Manage