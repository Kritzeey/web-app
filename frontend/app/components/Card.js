
export default function Card(props) {
    return(
        <div className="flex flex-col w-full gap-2">
            <div className="flex w-full gap-2">
                <span className="bg-[#313244] cursor-pointer h-12 relative flex items-center justify-center max-w-220 p-4 rounded-md w-full text-center font-medium">
                    {props.task}
                    <span className="absolute right-4">
                    <p>&#8744;</p>
                    </span>
                </span>
                <button className="cursor-pointer flex items-center justify-center size-12 bg-[#313244] rounded-sm">
                    ✏️
                </button>
                <button className="cursor-pointer flex items-center justify-center size-12 bg-[#313244] rounded-sm">
                    🗑️
                </button>
            </div>
            <div className="w-full bg-[#313244] rounded-sm max-w-220 h-64">
                
            </div>
        </div>
    );
}