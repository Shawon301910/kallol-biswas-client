
const Test = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="relative w-60 h-60">
                <div className="w-10 h-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                    <p>s</p>
                </div>
                <div className="w-full h-fit absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[60deg]">
                    <div className="w-full h-full flex justify-between items-center">
                        <span>m</span>
                        <span>m</span>
                    </div>
                </div>
                <div className="w-full h-fit absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[120deg]">
                    <div className="w-full h-full flex justify-between items-center">
                        <span>m</span>
                        <span>m</span>
                    </div>
                </div>
                <div className="w-full h-fit absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-full h-full flex justify-between items-center">
                        <span>m</span>
                        <span>m</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Test;