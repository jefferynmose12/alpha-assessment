import {
  RiArrowDownSLine,
  RiArrowRightDownLine,
  RiArrowRightSLine,
  RiInformationLine,
} from "react-icons/ri";
import { RiArrowRightUpLine } from "react-icons/ri";
import Carousel from "../components/carousel/Carousel";
import BarChart from "../components/bar/BarChart";
import PaginationControl from "../components/paginationControl/PaginationControl";
import { FiSearch } from "react-icons/fi";
import CustomSelect from "../components/customSelect/CustomSelect";
import Modal from "react-responsive-modal";
import { useState } from "react";
import { LiaTimesSolid } from "react-icons/lia";
import avatar1 from "../asset/images/avatar1.png";
import avatar2 from "../asset/images/avatar2.png";
import avatar3 from "../asset/images/avatar3.png";
import CustomButton from "../components/customButton/CustomButton";
import { RxDotsVertical } from "react-icons/rx";
import { PiDownloadSimpleBold } from "react-icons/pi";
import useFilter from "../hook/useFilter";

const cards = [
  { name: "Total Events", figure: "100,000", per: +5.0 },
  { name: "Active Speakers", figure: "25", per: -5.0 },
  {
    name: "Total Registrations",
    figure: "300",
    per: +5.0,
  },
  { name: "Total Revenue", figure: "$500,000", per: +5.0 },
];

const avatars = [
  { name: avatar1, z: 40 },
  { name: avatar2, z: 30 },
  { name: avatar1, z: 20 },
  { name: avatar3, z: 10 },
];

const HomePage = () => {
  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState<EventType | null>(null);
  const [filters, setFilters] = useState({ search: "", status: "" });
  const data = useFilter({ search: filters.search, status: filters.status });
  return (
    <div className="xl:mt-6">
      <h4 className="text-xl text-black dark:text-white">
        Welcome! here’s your summary
      </h4>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 xl:gap-3 2xl:gap-5">
        {cards?.map((card) => (
          <div
            key={card.name}
            className={`border border-gray-200 dark:border-none bg-white rounded dark:bg-primary-dark p-5 flex flex-col gap-1 cursor-pointer transform transition-transform duration-300 hover:scale-105`}
          >
            <div className="flex items-center gap-1 text-primary-gray text-md font-medium dark:text-white">
              <h6 className="">{card.name}</h6>
              <RiInformationLine />
            </div>

            <div className="flex items-center gap-1">
              <h5 className="text-primary-text dark:text-white text-xl font-semibold">
                {card.figure}
              </h5>

              <div
                className={`flex ${
                  card.per > 0 ? "text-green-500" : "text-red-500"
                }`}
              >
                {card.per > 0 ? (
                  <RiArrowRightUpLine />
                ) : (
                  <RiArrowRightDownLine />
                )}

                <span className="text-xs font-semibold">
                  {card.per > 0 ? `+${card.per}.0` : `${card.per}.0`}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-7">
        <h6 className="text-black font-semibold text-lg dark:text-white">
          Event Registrations per month
        </h6>

        <div className="mt-2 grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="p-5 border border-gray-200 dark:border-none bg-white dark:bg-primary-dark flex items-center lg:items-end justify-center lg:justify-end">
            <BarChart />
          </div>
          <div>
            <Carousel />
          </div>
        </div>
      </div>

      <div className="mt-7">
        <h6 className="text-black font-semibold text-lg dark:text-white">
          Events History
        </h6>

        <div className="mt-5 flex flex-col gap-3 xl:gap-0 xl:flex-row xl:items-center xl:justify-between">
          <div className="flex flex-col md:flex-row items-center justify-between xl:justify-start gap-3 w-full md:w-auto">
            <form className="w-full md:max-w-[200px]">
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-primary-text dark:text-white">
                  <FiSearch />
                </div>
                <input
                  className="w-full px-4 py-2.5 ps-10 text-sm text-gray-900 dark:bg-primary-dark border border-gray-200 bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none"
                  placeholder="Search..."
                  value={filters.search}
                  onChange={(e) =>
                    setFilters((prev) => ({ ...prev, search: e.target.value }))
                  }
                />
              </div>
            </form>
            <CustomSelect
              option="Date"
              className="w-full md:w-auto"
              inputClassName="w-full md:w-auto"
            />
            <CustomSelect
              options={["Completed", "In Progress"]}
              option="Status"
              className="w-full md:w-auto"
              inputClassName="w-full md:w-auto"
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, status: e.target.value }))
              }
            />
            <CustomSelect
              option="Name"
              className="w-full md:w-auto"
              inputClassName="w-full md:w-auto"
            />
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between xl:justify-start gap-3">
            <h6 className="text-sm font-semibold text-primary-text dark:text-white">
              Displaying 100 results
            </h6>

            <CustomSelect
              option="Most Recent"
              label="Sort:"
              className="w-full justify-between md:w-auto"
            />
            <div className="flex w-full md:w-auto items-center gap-3 justify-between md:justify-start">
              <CustomButton
                children={<RxDotsVertical />}
                className="text-black bg-white border-switch-dom"
              />
              <CustomButton
                children={
                  <div className="px-1 flex items-center gap-1">
                    <PiDownloadSimpleBold />
                    <span>Export</span>
                  </div>
                }
                className="text-black bg-white border-switch-dom"
              />
            </div>
          </div>
        </div>

        <div className="mt-5 hidden lg:block">
          <PaginationControl count={data.length}>
            <table className="w-full text-sm text-left rtl:text-right text-primary-gray dark:text-white">
              <thead className="text-xs bg-table-color dark:bg-table-head-dark">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Event Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Speaker
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.length &&
                  data?.map((item) => (
                    <tr
                      key={item.name}
                      onClick={() => {
                        setOpen(true);
                        setDetails(item);
                      }}
                      className="bg-white border-b dark:bg-primary-dark dark:border-gray-700 text-sm hover:bg-gray-50 dark:hover:bg-gray-600 cursor-pointer"
                    >
                      <td className="px-6 py-3">{item.name}</td>
                      <td className="px-6 py-3">{item.date}</td>
                      <td className="px-6 py-3">{item.speakers[0]}</td>
                      <td className="px-6 py-3">
                        {item.status === "Completed" ? (
                          <div className="w-fit px-3 py-1 flex gap-2 rounded-3xl items-center border border-primary-green text-primary-green font-medium text-xs">
                            <div className="w-1.5 h-1.5 rounded-xl bg-primary-green" />
                            <span>{item.status}</span>
                          </div>
                        ) : (
                          <div className="w-fit px-3 py-1 flex gap-2 rounded-3xl items-center border border-primary-blue text-primary-blue font-medium text-xs">
                            <div className="w-1.5 h-1.5 rounded-xl bg-primary-blue" />
                            <span>{item.status}</span>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </PaginationControl>
        </div>

        <div className="mt-5 -mx-3 md:mx-0 lg:hidden">
          <PaginationControl count={data.length}>
            <div className="w-full text-sm text-left rtl:text-right text-primary-gray dark:text-white">
              <div className="text-xs bg-table-color py-3 dark:bg-table-head-dark flex items-center font-semibold justify-between">
                <span className="px-4 ">Event Name</span>
                <span className="px-3 pr-10">Status</span>
              </div>
              <div className="flex flex-col">
                {data.length &&
                  data?.map((item) => (
                    <CollapseComponent
                      key={item.name}
                      item={item}
                      onOpen={() => {
                        setOpen(!open);
                        setDetails(item);
                      }}
                    />
                  ))}
              </div>
            </div>
          </PaginationControl>
        </div>
      </div>

      <Modal
        showCloseIcon={false}
        blockScroll={false}
        classNames={{
          modalContainer: "_modal_bg",
        }}
        center
        open={open}
        onClose={() => setOpen(false)}
      >
        <EventModal close={() => setOpen(false)} event={details} />
      </Modal>
    </div>
  );
};

export default HomePage;

interface EventModalType {
  close: () => void;
  event: EventType | null;
}

const EventModal = ({ close, event }: EventModalType) => {
  return (
    <div className="relative md:w-[500px] bg-white dark:bg-dark-body">
      <button
        onClick={close}
        className="text-black font-medium hover:bg-primary-color p-1.5 text-sm rounded-3xl bg-white dark:bg-dark-gray border border-gray-300 cursor-pointer absolute top-7 md:top-7 right-4 md:right-7 outline-none"
      >
        <LiaTimesSolid />
      </button>

      <div className="pt-7 p-4 md:p-7 pb-5 md:pb-6">
        <div className="">
          <h5 className="text-lg font-semibold text-primary-text dark:text-white">
            {event?.name}
          </h5>
          <p className="text-primary-gray dark:text-white">{event?.date}</p>
        </div>

        <div className="mt-6 mb-10">
          <p className="text-primary-text dark:text-white leading-6">
            {event?.des}
          </p>
        </div>

        <div className="">
          <div className="flex items-center">
            {avatars.slice(0, event?.speakers.length).map(({ name, z }, i) => (
              <img
                key={name}
                src={name}
                alt="avatar"
                className={`border-2 border-white rounded-3xl ${
                  i !== 0 ? "-ml-2" : "ml-0"
                }`}
                style={{
                  zIndex: `${z}`,
                }}
              />
            ))}
          </div>

          <div className="mt-1.5 text-primary-text dark:text-white">
            <p>
              {event?.speakers.length ?? 0} Guest Speakers:{" "}
              {event?.speakers.map((speaker) => (
                <span key={speaker}>{speaker}, </span>
              ))}
            </p>

            <p>300 Attendees</p>
          </div>
        </div>
      </div>

      <div className="bg-light-blue dark:bg-dark-gray p-4 md:p-7 flex flex-col md:flex-row gap-2 md:gap-0 items-center justify-between">
        <div className="w-full md:w-auto">
          <CustomButton
            children="Edit"
            className="text-black bg-white border-switch-dom w-full md:w-auto"
          />
        </div>

        <div className="flex flex-col md:flex-row items-center gap-2 w-full md:w-auto">
          <CustomButton
            children="Delete"
            className="bg-delete-color border-delete-color text-white w-full md:w-auto"
          />
          <CustomButton
            children="Mark as completed"
            className="text-white border-primary-color bg-primary-color w-full md:w-auto"
          />
        </div>
      </div>
    </div>
  );
};

interface CollapseComponentType {
  item: EventType;
  onOpen: () => void;
}
const CollapseComponent = ({ item, onOpen }: CollapseComponentType) => {
  const [collapse, setCollapse] = useState(false);

  return (
    <div className="bg-white border-b dark:bg-primary-dark dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 cursor-pointer flex flex-col items-center">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-1 flex-1">
          <CustomButton
            children={collapse ? <RiArrowDownSLine /> : <RiArrowRightSLine />}
            className="border-transparent bg-transparent text-primary-text dark:text-white"
            onClick={() => setCollapse(!collapse)}
          />
          <span onClick={onOpen} className="py-3 flex-1 h-full">
            {item.name}
          </span>
        </div>

        <div className="pr-3 py-3" onClick={onOpen}>
          {item.status === "Completed" ? (
            <div className="w-fit px-3 py-1 rounded-3xl bg-primary-green text-white font-medium text-xs">
              <span>{item.status}</span>
            </div>
          ) : (
            <div className="w-fit px-3 py-1 flex gap-2 rounded-3xl bg-primary-blue text-white font-medium text-xs">
              <span>{item.status}</span>
            </div>
          )}
        </div>
      </div>

      <div
        onClick={onOpen}
        className={`items-center bg-select-color dark:bg-dark-body justify-between transform duration-200 ease-in-out w-full py-3 pl-5 ${
          collapse ? "flex" : "hidden"
        }`}
      >
        <span className="">{item.speakers[0]}</span>
        <span className="pr-6">{item.date}</span>
      </div>
    </div>
  );
};
