import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'Card',
    Board: () => {
        return (
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                    <div className="md:shrink-0">
                        <img
                            className="h-48 w-full object-cover md:h-full md:w-48"
                            src="https://static.wixstatic.com/media/11062b_da78e7297d324d7ca36fd38de4bcf64d~mv2.jpg/v1/fit/w_462,h_260/11062b_da78e7297d324d7ca36fd38de4bcf64d~mv2.jpg"
                            alt="Modern building architecture"
                        />
                    </div>
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                            Company retreats
                        </div>
                        <a
                            href="#"
                            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                        >
                            Incredible accomodation for your team
                        </a>
                        <p className="mt-2 text-slate-500">
                            Looking to take your team away on a retreat to enjoy awesome food and
                            take in some sunshine? We have a list of places to do just that.
                        </p>
                    </div>
                </div>
            </div>
        );
    },
});
