import { AiOutlineShoppingCart } from "react-icons/ai";
const Header = (props) => {
  return (
    <>
      <h1
        class={`mt-14 ${
          props.subheader != null ? "sm:mb-0 mb-[56px]" : "mb-[56px]"
        } font-bold sm:text-4xl text-3xl sm:px-14 px-8 left-1 relative text-center`}
      >
        <AiOutlineShoppingCart class="sm:mr-4 mr-3 bottom-[3px] relative inline"></AiOutlineShoppingCart>
        E-Commerce Digital Services
      </h1>
      {props.subheader != null ? (
        <h2 class="mt-4 mb-12 text-blue-700 font-bold sm:text-3xl text-2xl sm:px-14 px-8 left-1 sm:block hidden relative text-center">
          {props.subheader}
        </h2>
      ) : (
        ""
      )}
    </>
  );
};

export default Header;
