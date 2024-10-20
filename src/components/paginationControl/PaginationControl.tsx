import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import CustomSelect from "../customSelect/CustomSelect";
import emptyIcon from "../../asset/images/empty.png";

interface IPaginationControl {
  children: JSX.Element;
  count?: number;
}
const PaginationControl = (props: IPaginationControl) => {
  const { children, count } = props;

  if (count === 0) {
    return (
      <div className="flex items-center justify-center my-5">
        <div className="flex flex-col items-center">
          <img src={emptyIcon} alt="empty record" className="w-20" />
          <span className="dark:text-gray-400 mt-2 text-xs">
            No record found
          </span>
        </div>
      </div>
    );
  }

  return (
    <div>
      {children}

      <div className="mt-4 md:mt-5 px-3 flex items-center justify-between">
        <div>
          <nav>
            <ul className="flex items-center gap-2 md:gap-3 text-sm dark:text-white text-primary-text">
              <li>
                <a
                  href="/"
                  className="flex items-center justify-center px-3 h-10 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <FaAngleLeft className="text-primary-color" />
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="flex items-center justify-center w-7 h-7 text-white leading-tight bg-primary-color rounded-2xl"
                >
                  1
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="flex items-center justify-center w-7 h-7 leading-tight"
                >
                  2
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="flex items-center justify-center w-7 h-7 leading-tight"
                >
                  3
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="flex items-center justify-center px-3 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <FaAngleRight className="text-primary-color" />
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="">
          <CustomSelect
            option="10 rows"
            label="Show:"
            labelClassName="hidden md:block"
          />
        </div>
      </div>
    </div>
  );
};

export default PaginationControl;
