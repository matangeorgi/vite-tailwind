import { createBoard } from '@wixc3/react-board';
import quote from '../../../assets/quote.svg';

export default createBoard({
    name: 'Testimonial',
    Board: () => {
        return (
            <div className="container px-4 mx-auto">
                <div className="flex flex-wrap items-center -mx-4">
                    <div className="w-full lg:w-5/12 px-4 mb-12 lg:mb-0">
                        <img
                            className="mx-auto object-cover rounded-lg"
                            src="https://static.wixstatic.com/media/11062b_2b51661db55c4079847fe54fff8d9f24~mv2.jpeg/v1/fit/w_924,h_520/11062b_2b51661db55c4079847fe54fff8d9f24~mv2.jpeg"
                            alt=""
                        />
                    </div>
                    <div className="w-full lg:w-7/12 px-4">
                        <div className="max-w-xl lg:ml-auto">
                            <img className="mb-4" src={quote} alt="" />
                            <h2 className="mb-4 text-5xl font-bold font-heading">
                                Lorem ipsum dolor sit amet consectutar domor at elis
                            </h2>
                            <p className="mb-9 text-lg text-gray-500 leading-loose">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Pellentesque massa nibh, pulvinar vitae aliquet nec, accumsan
                                aliquet orci.
                            </p>
                            <p className="text-2xl font-bold font-heading">Ruth Bailey</p>
                            <p className="text-lg text-gray-500">CEO &amp; Founder</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    },
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 1080,
        canvasWidth: 1280,
    },
});
