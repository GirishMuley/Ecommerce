import React, { Children } from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  ShoppingCartIcon,
  XMarkIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectItems } from "../cart/CartSlice";
import { selectLoggedInUser } from "../auth/authSlice";
import { selectUserInfo } from "../user/userSlice";

// const user = {
//   name: "Tom Cook",
//   email: "tom@example.com",
//   imageUrl:
//     "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
// };
const navigation = [
  { name: "Home", link: "/", user: true },
  { name: "Admin", link: "/admin", admin: true },
  { name: "Orders", link: "/admin/orders", admin: true },
];
const userNavigation = [
  { name: "My Profile", link: "/profile" },
  { name: "My Orders", link: "/orders" },
  { name: "Sign out", link: "/logout" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function NavBar({ children }) {
  const items = useSelector(selectItems);
  const userInfo = useSelector(selectUserInfo);
  return (
    <>
      {userInfo && (
        <div>
          <div className="min-h-full">
            <Disclosure as="nav" className="bg-white">
              {({ open }) => (
                <>
                  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <Link to="/">
                            {/* <img
                          className="h-8 w-8"
                          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                          alt="Your Company"
                        /> */}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="159"
                              height="40"
                              fill="none"
                            >
                              <path
                                fill="#2A55E5"
                                d="m82.756 4.783.245-1.595a.842.842 0 0 0-.198-.693.853.853 0 0 0-.656-.302h-9.683a.863.863 0 0 0-.854.73l-2.6 16.44a.872.872 0 0 0 .198.699.855.855 0 0 0 .651.307h2.236a.867.867 0 0 0 .854-.73l1.006-6.378h5.54a.862.862 0 0 0 .849-.73l.229-1.39a.871.871 0 0 0-.86-1.007h-5.227l.683-4.617h6.728a.861.861 0 0 0 .86-.734Zm50.751 5.487-.068-.026a7.128 7.128 0 0 0-2.063-.281c-1.246 0-2.194.505-2.814 1.506a6.207 6.207 0 0 0-.918 3.293c0 .756.131 1.391.391 1.886.271.51.657.777 1.147.777.547 0 1.177-.355 1.881-1.048a11.81 11.81 0 0 0 1.86-2.407l.584-3.7Zm4.065-1.892-1.777 11.277a.86.86 0 0 1-.855.73h-1.318a.85.85 0 0 1-.621-.266.855.855 0 0 1-.239-.63l.052-1.397-.156.172c-.006.005-.511.568-1.095 1.021-.87.677-1.834 1.042-1.938 1.084a4.951 4.951 0 0 1-1.72.297c-1.329 0-2.319-.474-3.043-1.444-.719-.964-1.079-2.245-1.079-3.798 0-.808.083-1.605.24-2.366.161-.76.443-1.532.844-2.298a7.8 7.8 0 0 1 1.501-2.006c.589-.568 1.37-1.032 2.313-1.387.944-.349 2.022-.526 3.195-.526 1.443 0 3.127.183 5.003.553a.864.864 0 0 1 .693.984Zm9.442-1.407c-.886.209-1.751.75-2.324 1.173-.651.48-1.584 1.496-1.6 1.506l-.156.172.083-1.793a.863.863 0 0 0-.865-.906h-1.329a.857.857 0 0 0-.854.729l-1.819 11.532a.88.88 0 0 0 .198.693.853.853 0 0 0 .657.302h2.053a.862.862 0 0 0 .854-.73l.959-6.138a7.395 7.395 0 0 1 2.116-1.975c.641-.401 1.297-.662 1.954-.76a.864.864 0 0 0 .714-.694l.396-2.11a.845.845 0 0 0-.25-.782.847.847 0 0 0-.787-.219Zm-41.199 5.774c0-.76-.135-1.396-.396-1.886-.271-.51-.651-.771-1.141-.771-.547 0-1.183.349-1.881 1.047a11.98 11.98 0 0 0-1.866 2.408l-.583 3.694.073.021c.599.188 1.292.281 2.063.281 1.251 0 2.199-.505 2.814-1.506.605-.98.917-2.084.917-3.288Zm2.778-4.455c.714.964 1.079 2.246 1.079 3.794a10.63 10.63 0 0 1-.417 2.97 9.892 9.892 0 0 1-1.303 2.746c-.584.865-1.428 1.574-2.512 2.095-1.089.526-2.381.797-3.835.797-.573 0-1.298-.057-2.152-.177l-.089-.01-.156 1.563c-.005.016-.005.031-.005.052l-.454 2.746a.862.862 0 0 1-.85.72h-2.037a.842.842 0 0 1-.651-.303.848.848 0 0 1-.198-.698L97.67 7.852a.858.858 0 0 1 .855-.724h1.319c.234 0 .463.093.625.26.161.172.25.401.24.63l-.053 1.418.157-.198c.015-.015 1.271-1.542 3.194-2.147a5.148 5.148 0 0 1 1.558-.25c1.308.005 2.304.474 3.028 1.449Zm47.54-1.167h-1.605l.355-2.293a.862.862 0 0 0-.855-.995h-1.621c-.38 0-.719.25-.828.62l-.787 2.668h-.886a.853.853 0 0 0-.849.724l-.203 1.24a.85.85 0 0 0 .198.698.851.851 0 0 0 .656.303h.537l-.959 6.138a6.937 6.937 0 0 0-.104 1.21c0 1.088.286 1.88.881 2.422.583.532 1.474.808 2.657.808.709 0 1.709-.297 1.829-.339.094-.036.271-.093.292-.104a.852.852 0 0 0 .547-.703l.151-1.272a.864.864 0 0 0-.265-.72 1.24 1.24 0 0 0-.183-.14c-.047-.02-.088-.042-.135-.057-.032-.01-.11-.026-.417-.021-.073 0-.151.005-.229.005a1.53 1.53 0 0 1-.277-.015c-.12-.021-.417-.084-.568-.22-.073-.062-.297-.26-.297-.99 0-.072.006-.182.026-.338l.881-5.66h1.819a.866.866 0 0 0 .849-.692l.24-1.24a.842.842 0 0 0-.183-.714.835.835 0 0 0-.667-.323Zm-32.663.349a.865.865 0 0 0-.693-.35h-2.147a.872.872 0 0 0-.828.616c-.183.625-.526 1.344-1.032 2.146-.703 1.131-1.282 1.83-1.772 2.142l-.078.037c-.172.088-.443.218-1.391.385l-.12.02 1.485-9.28a.852.852 0 0 0-.198-.693.854.854 0 0 0-.651-.307h-2.053a.863.863 0 0 0-.855.73l-2.611 16.471a.866.866 0 0 0 .85 1h2.053a.862.862 0 0 0 .854-.729l.673-4.294h1.287l1.771 4.477a.86.86 0 0 0 .803.547h2.23a.866.866 0 0 0 .792-1.209l-2.027-5.227.042-.036c.839-.756 1.699-1.83 2.559-3.179.557-.875.953-1.72 1.188-2.496a.862.862 0 0 0-.131-.771ZM93.741 5.986c.855 0 1.496-.218 1.902-.661.412-.449.615-1 .615-1.7 0-.541-.15-.947-.458-1.218-.303-.271-.772-.407-1.397-.407-.855 0-1.496.224-1.897.662-.417.448-.62 1.006-.62 1.704 0 .542.157.948.459 1.214.312.276.766.406 1.396.406Zm.693 1.137h-2.032a.862.862 0 0 0-.855.724L89.73 19.384a.855.855 0 0 0 .198.693.85.85 0 0 0 .651.302h2.032a.867.867 0 0 0 .855-.73l1.819-11.531a.855.855 0 0 0-.198-.693.86.86 0 0 0-.652-.302Zm-5.878-4.628a.86.86 0 0 1 .198.693l-2 12.767c-.022.22-.027.354-.027.443 0 .427.084.724.245.876.151.14.485.218.542.229.183.026.354.12.485.255.172.183.26.433.24.683l-.115 1.146c-.026.245-.13.448-.282.558-.14.094-.312.182-.531.266-.219.083-.834.26-1.261.26-1.079 0-1.913-.25-2.48-.745-.563-.49-.85-1.204-.85-2.126 0-.25.026-.526.078-.823.016-.125 2.173-13.898 2.2-14.05a.863.863 0 0 1 .854-.729h2.053a.836.836 0 0 1 .651.297Z"
                              />
                              <path
                                fill="url(#a)"
                                d="M147.678 29.524s1.289.64 1.925.913c.618.264.688 1.253.008 1.588-.681.334-.869.388-.869.388s.107-.277.093-.545c-.044-.477-1.45-.865-2.382-1.094 0 0-.715-2.253-1.039-2.88-.325-.631-.984-.894-.984-.894l1.558.021s.536-.026.774.55c.237.58.916 1.953.916 1.953Z"
                              />
                              <path
                                fill="url(#b)"
                                d="M147.588 34.458s-.632 1.279-.91 1.933c-.264.62-1.269.691-1.602.008-.333-.683-.367-.804-.367-.804s.201.04.521.025c.476-.043.884-1.455 1.113-2.39 0 0 2.242-.719 2.869-1.043.629-.326.889-.988.889-.988l-.021 1.798s.027.306-.548.545c-.577.236-1.944.916-1.944.916Z"
                              />
                              <path
                                fill="url(#c)"
                                d="M142.628 34.368s-1.282-.637-1.925-.912c-.619-.264-.689-1.255-.008-1.588.68-.334.954-.395.954-.395s-.177.284-.134.603c.045.479 1.407.813 2.336 1.043 0 0 .742 2.239 1.039 2.88.362.78.962.899.962.899l-1.767-.027s-.306.027-.544-.55c-.235-.58-.913-1.953-.913-1.953Z"
                              />
                              <path
                                fill="url(#d)"
                                d="M142.734 29.425s.634-1.285.909-1.932c.263-.62 1.249-.69 1.582-.008.333.683.365.806.365.806s-.251.004-.517.019c-.477.045-.865 1.411-1.093 2.345 0 0-2.236.734-2.869 1.043-.871.424-.904.968-.904.968l.036-1.776s-.027-.306.548-.545c.575-.24 1.943-.92 1.943-.92Z"
                              />
                              <path
                                fill="#9E9E9E"
                                d="M73.887 35.645H68l1.293-8.16h5.887l-.242 1.58H70.92l-.266 1.709h3.475l-.243 1.512h-3.474l-.277 1.778h4.005l-.254 1.581ZM80.774 35.645h-2.032l-.83-1.72-1.455 1.72H74.54l2.585-3.036-1.547-3.047h2.044l.808 1.79 1.477-1.79h1.859l-2.586 3.013 1.593 3.07ZM86.074 29.435c.608 0 1.077.223 1.408.67.331.446.497 1.027.497 1.743 0 .469-.066.923-.197 1.362-.123.43-.319.846-.588 1.246-.27.4-.654.724-1.155.97-.5.239-1.085.358-1.754.358-.262 0-.59-.027-.982-.08l-.069.68L82.97 38h-1.79l1.34-8.438h1.408l-.046 1.293c.57-.947 1.3-1.42 2.193-1.42Zm-.577 1.547c-.239 0-.516.154-.831.462-.308.307-.585.67-.832 1.085l-.254 1.627c.27.085.578.127.924.127.554 0 .966-.22 1.235-.658.277-.446.416-.939.416-1.477 0-.339-.058-.616-.173-.831-.116-.224-.278-.335-.485-.335ZM91.72 34.156l-.138 1.362c-.424.17-.858.254-1.305.254-.5 0-.885-.115-1.154-.346-.262-.23-.393-.562-.393-.993 0-.115.012-.242.035-.38l1.074-6.846h1.8l-1.004 6.395a2.72 2.72 0 0 0-.011.196c0 .185.03.308.092.37.07.061.204.092.404.092.162 0 .362-.035.6-.104ZM95.132 35.76c-.831-.014-1.478-.238-1.94-.669-.461-.43-.692-1.035-.692-1.812 0-1.139.323-2.063.97-2.77.654-.716 1.523-1.074 2.608-1.074.862 0 1.528.215 1.997.646.477.424.716 1.032.716 1.824 0 1.178-.323 2.117-.97 2.817-.646.692-1.543 1.039-2.69 1.039Zm.196-1.5c.508 0 .912-.188 1.212-.566.3-.384.45-.908.45-1.57 0-.8-.342-1.2-1.027-1.2-.5 0-.904.189-1.212.566-.308.377-.462.904-.462 1.581 0 .408.085.708.254.9.177.185.439.282.785.29ZM99.345 35.645l.958-6.083h1.42l-.069 1.466c.623-1.062 1.4-1.593 2.332-1.593h.103l-.346 1.835c-.392 0-.781.123-1.166.37-.385.238-.7.53-.946.877l-.485 3.128h-1.801ZM110.056 31.27c-.062 1.416-1.12 2.124-3.175 2.124-.292 0-.577-.011-.854-.034.038.354.162.608.369.762.216.154.581.23 1.097.23.608 0 1.235-.111 1.882-.334l-.277 1.466c-.647.2-1.34.3-2.078.3-1.032 0-1.767-.22-2.205-.658-.431-.439-.647-1.074-.647-1.905 0-1.062.316-1.954.947-2.678.639-.723 1.497-1.085 2.574-1.085.808 0 1.405.166 1.789.496.385.324.578.762.578 1.316Zm-3.937.958c.077.016.2.024.37.024 1.177 0 1.766-.274 1.766-.82a.558.558 0 0 0-.173-.427c-.116-.116-.289-.173-.52-.173-.369 0-.677.123-.923.37-.239.245-.412.588-.52 1.026Z"
                              />
                              <path
                                fill="#FFC200"
                                d="M115.123 35.645h-1.881l1.293-8.16h3.347c1.024 0 1.743.188 2.159.565.423.377.635.908.635 1.593 0 .346-.031.67-.092.97a3.271 3.271 0 0 1-.347.9c-.161.3-.377.558-.646.773-.262.208-.612.381-1.051.52-.438.13-.946.196-1.523.196h-1.466l-.428 2.643Zm.658-4.132h1.305c1.093 0 1.639-.52 1.639-1.559 0-.323-.092-.565-.277-.727-.185-.17-.504-.254-.958-.254h-1.305l-.404 2.54ZM123.907 34.156l-.138 1.362a3.49 3.49 0 0 1-1.305.254c-.5 0-.885-.115-1.154-.346-.262-.23-.393-.562-.393-.993 0-.115.012-.242.035-.38l1.073-6.846h1.801l-1.004 6.395a2.627 2.627 0 0 0-.012.196c0 .185.031.308.093.37.069.061.204.092.404.092.161 0 .361-.035.6-.104ZM131.104 29.562l-.97 6.083h-1.408l.046-1.293c-.639.947-1.458 1.42-2.459 1.42-.538 0-.942-.15-1.212-.45-.269-.3-.404-.7-.404-1.2 0-.208.016-.393.046-.554l.647-4.006h1.789l-.565 3.555a1.814 1.814 0 0 0-.035.37c0 .454.162.68.485.68.254 0 .538-.142.854-.426.316-.285.612-.643.889-1.074l.496-3.105h1.801ZM131.36 35.472l.312-1.5c.054.061.296.138.727.23a6.31 6.31 0 0 0 1.212.127c.778 0 1.166-.192 1.166-.577 0-.138-.1-.25-.3-.335a3.327 3.327 0 0 0-.716-.207 9.127 9.127 0 0 1-.842-.231 1.7 1.7 0 0 1-.716-.496c-.192-.24-.289-.54-.289-.9 0-.694.251-1.225.751-1.594.5-.37 1.254-.554 2.262-.554.331 0 .654.023.97.07.315.038.554.08.716.126.169.046.277.085.323.116l-.3 1.454c-.131-.085-.37-.158-.716-.22a5.73 5.73 0 0 0-1.004-.092c-.801 0-1.201.185-1.201.555 0 .13.096.234.289.311.2.077.438.146.715.208.278.054.555.13.832.23.284.093.523.259.715.497.2.231.3.527.3.89 0 .746-.269 1.296-.808 1.65-.531.354-1.262.53-2.193.53a8.45 8.45 0 0 1-1.073-.068 11.487 11.487 0 0 1-.82-.127 2.645 2.645 0 0 1-.312-.093Z"
                              />
                              <defs>
                                <linearGradient
                                  id="a"
                                  x1="144.463"
                                  x2="149.609"
                                  y1="26.966"
                                  y2="32.094"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop offset=".041" stop-color="#FFF300" />
                                  <stop offset=".273" stop-color="#FFF300" />
                                  <stop offset=".502" stop-color="#FFE500" />
                                  <stop offset=".813" stop-color="#F2A930" />
                                </linearGradient>
                                <linearGradient
                                  id="b"
                                  x1="145.01"
                                  x2="150.165"
                                  y1="36.4"
                                  y2="31.263"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop offset=".187" stop-color="#F2A930" />
                                  <stop offset=".498" stop-color="#FFE500" />
                                  <stop offset=".727" stop-color="#FFF300" />
                                  <stop offset=".959" stop-color="#FFF300" />
                                </linearGradient>
                                <linearGradient
                                  id="c"
                                  x1="140.703"
                                  x2="145.84"
                                  y1="31.791"
                                  y2="36.91"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop offset=".187" stop-color="#F2A930" />
                                  <stop offset=".498" stop-color="#FFE500" />
                                  <stop offset=".727" stop-color="#FFF300" />
                                  <stop offset=".959" stop-color="#FFF300" />
                                </linearGradient>
                                <linearGradient
                                  id="d"
                                  x1="140.179"
                                  x2="145.322"
                                  y1="32.638"
                                  y2="27.514"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop offset=".041" stop-color="#FFF300" />
                                  <stop offset=".273" stop-color="#FFF300" />
                                  <stop offset=".502" stop-color="#FFE500" />
                                  <stop offset=".813" stop-color="#F2A930" />
                                </linearGradient>
                              </defs>
                            </svg>
                          </Link>
                        </div>
                        <div className="hidden md:block">
                          <div className="ml-10 flex items-baseline space-x-4">
                            {navigation.map((item) =>
                              item[userInfo.role] ? (
                                <Link
                                  key={item.name}
                                  to={item.link}
                                  className={classNames(
                                    item.current
                                      ? "bg-blue-700 text-black"
                                      : "text-gray-700 hover:bg-blue-700 hover:text-white",
                                    "rounded-md px-3 py-2 text-sm font-medium"
                                  )}
                                  aria-current={
                                    item.current ? "page" : undefined
                                  }
                                >
                                  {item.name}
                                </Link>
                              ) : null
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="hidden md:block">
                        <div className="ml-4 flex items-center md:ml-6">
                          <Link to="/cart">
                            <button
                              type="button"
                              className="relative rounded-full bg-white p-1 text-gray-900 hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                            >
                              <span className="absolute -inset-1.5" />

                              <ShoppingCartIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>
                          </Link>
                          {items.length > 0 && (
                            <span className="inline-flex items-center rounded-md mb-7 -ml-3 z-0 bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-600/10">
                              {items.length}
                            </span>
                          )}

                          {/* Profile dropdown */}
                          <Menu as="div" className="relative ml-3">
                            <div>
                              <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-white hover:bg-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 ">
                                <span className="absolute -inset-1.5" />
                                <span className="sr-only">Open user menu</span>
                                {/* <img
                              className="h-8 w-8 rounded-full"
                              src={user.imageUrl}
                              alt=""
                            /> */}
                                <UserCircleIcon className="w-8 h-8"></UserCircleIcon>
                              </Menu.Button>
                            </div>
                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-100"
                              enterFrom="transform opacity-0 scale-95"
                              enterTo="transform opacity-100 scale-100"
                              leave="transition ease-in duration-75"
                              leaveFrom="transform opacity-100 scale-100"
                              leaveTo="transform opacity-0 scale-95"
                            >
                              <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                {userNavigation.map((item) => (
                                  <Menu.Item key={item.name}>
                                    {({ active }) => (
                                      <Link
                                        to={item.link}
                                        className={classNames(
                                          active ? "bg-gray-100" : "",
                                          "block px-4 py-2 text-sm text-gray-700"
                                        )}
                                      >
                                        {item.name}
                                      </Link>
                                    )}
                                  </Menu.Item>
                                ))}
                              </Menu.Items>
                            </Transition>
                          </Menu>
                        </div>
                      </div>
                      <div className="-mr-2 flex md:hidden">
                        {/* Mobile menu button */}
                        <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-blue-500 p-2 text-white hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-700">
                          <span className="absolute -inset-0.5" />
                          <span className="sr-only">Open main menu</span>
                          {open ? (
                            <XMarkIcon
                              className="block h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <Bars3Icon
                              className="block h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </Disclosure.Button>
                      </div>
                    </div>
                  </div>

                  <Disclosure.Panel className="md:hidden">
                    <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                      {navigation.map((item) =>
                        item[userInfo.role] ? (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className={classNames(
                              item.current
                                ? "bg-gray-900 text-white"
                                : "text-gray-600 hover:bg-gray-700 hover:text-white",
                              "block rounded-md px-3 py-2 text-base font-medium"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </Disclosure.Button>
                        ) : null
                      )}
                    </div>
                    <div className="border-t border-gray-700 pb-3 pt-4">
                      <div className="flex items-center px-5">
                        <div className="flex-shrink-0">
                          {/* <img
                        className="h-10 w-10 rounded-full"
                        src={user.imageUrl}
                        alt=""
                      /> */}
                          <UserCircleIcon className="w-8 h-8"></UserCircleIcon>
                        </div>
                        <div className="ml-3">
                          <div className="text-base font-medium leading-none text-black">
                            {/* this should come from userInfo */}
                            {userInfo.name}
                          </div>
                          <div className="text-sm font-medium leading-none text-gray-600">
                            {userInfo.email}
                          </div>
                        </div>
                        <Link to="/cart">
                          <button
                            type="button"
                            className="relative ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-900 hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                          >
                            <span className="absolute -inset-1.5" />

                            <ShoppingCartIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          </button>
                        </Link>
                        {items.length > 0 && (
                          <span className="inline-flex items-center rounded-md mb-7 -ml-3 z-0 bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-600/10">
                            {items.length}
                          </span>
                        )}
                      </div>
                      <div className="mt-3 space-y-1 px-2">
                        {userNavigation.map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-700 hover:text-white"
                          >
                            <Link to={item.link}>{item.name}</Link>
                          </Disclosure.Button>
                        ))}
                      </div>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>

            {/* <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              E-commerce
            </h1>
          </div>
        </header> */}
            <main>
              <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                {children}
              </div>
            </main>
          </div>
        </div>
      )}
    </>
  );
}

export default NavBar;
