function MenuItem({ text, link }) {
  return (
    <li className="list-none mt-1">
      <a
        className="font-normal text-md px-5 py-3 rounded sm:text-xl text-green-600 hover:bg-green-300 hover:text-white transition duration-300 ease-in-out  "
        href={link}
      >
        {text}
      </a>
    </li>
  );
}

export default MenuItem;
