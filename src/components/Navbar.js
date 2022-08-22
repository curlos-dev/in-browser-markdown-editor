const Navbar = () => {
    return (
        <div className="flex justify-between gap-3 bg-[#2B2D31] text-white">
            <div className="flex justify-between gap-3 items-center">
                <div className="p-5 bg-[#35393F] h-[100%] flex items-center">
                    <img src="/assets/icon-menu.svg" alt="Menu Icon" />
                </div>

                <div className="">
                    <div className="tracking-[5px] border-r border-[#5A6069] px-6 font-bold">
                        MARKDOWN
                    </div>
                </div>

                <div className="py-3 px-6 flex items-center gap-3">
                    <div>
                        <img src="/assets/icon-document.svg" alt="" />
                    </div>

                    <div>
                        <div className="text-[#C1C4CB]">Document Name</div>
                        <div>welcome.md</div>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-5 px-5 py-3">
                <img src="/assets/icon-delete.svg" alt="" />
                <div className="flex items-center gap-3 bg-[#E46643] py-3 px-5 rounded-md">
                    <img src="/assets/icon-save.svg" alt="Save Icon" />
                    <div>Save Changes</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar