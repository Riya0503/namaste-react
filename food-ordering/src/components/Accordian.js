const Accordian = (props) => {
    // const [isOpen, setIsOpen] = useState(false);
    const { title, children, isOpen,childLen, setShowIndex } = props;
    return (
        <div className="border-b-6 border-gray-200">
            <div className="flex justify-between w-full py-4 px-4 hover:bg-gray-100 "  onClick={setShowIndex}>
                <div className="font-bold">{title + " (" + childLen + ")"}</div>
                <div>{isOpen ? '-' : '+'}</div>
            </div>
            {isOpen && <div>{children}</div>}
        </div>
    )
}

export default Accordian;