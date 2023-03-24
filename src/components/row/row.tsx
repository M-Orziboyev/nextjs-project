import { RowProps } from "./row.props";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";
import Thumbnail from "../thumbnail/thumbnail";
import { useRef, useState } from "react";

function Row({ title, movies, isBig = false }: RowProps): JSX.Element {
    const [moved, setMoved] = useState<boolean>(false);
    const carouseRef = useRef<HTMLDivElement>(null);

    const handleClick = (direction: "left" | "right") => {
        setMoved(true);

        if (carouseRef.current) {
            const { scrollLeft, clientWidth } = carouseRef.current;
            const scrollTo =
                direction === "left"
                    ? scrollLeft - clientWidth
                    : scrollLeft + clientWidth;

            carouseRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });

            if(direction == 'left' && scrollLeft === 0){
                setMoved(false)
            }
        }
    };

    return (
        <>
            <div className="h-[10vh] space-x-1 md:space-x-2">
                <h2 className="text-sm md:text-2xl pl-10 w-56 cursor-pointer font-semibold text-white hover:text-teal-400 transation duration-400">
                    {title}
                </h2>
            </div>
            <div className="group relative mb-40">
                <AiFillCaretLeft
                    onClick={() => handleClick("left")}
                    className={`${!moved && 'hidden'} md:ml-2 absolute top-0 bottom-0 left-2 z-40 m-auto h-6 w-6 cursor-pointer fill-white opacity-0 group-hover:opacity-100 hover:scale-150 transation duration-200 shadow `}
                />
                <div
                    ref={carouseRef}
                    className={`flex scrollbar-hide items-center ${!isBig && 'space-x-1 md:space-x-4'} overflow-hidden overflow-x-scroll`}
                >
                    {movies.map((movie) => (
                        <Thumbnail key={movie.id} movie={movie} isBig={isBig}  />
                    ))}
                </div>
                <AiFillCaretRight
                    onClick={() => handleClick("right")}
                    className="md:ml-2 absolute top-0 bottom-0 right-2 z-40 m-auto h-6 w-6 cursor-pointer fill-white opacity-0 group-hover:opacity-100 hover:scale-150 transation duration-200 shadow"
                />
            </div>
        </>
    );
}

export default Row;
