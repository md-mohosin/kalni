import React from 'react';
import { useParams } from 'react-router-dom';
import UseAxiosPublic from '../../hooks/UseAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { FaFacebookSquare, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { CiHeart, CiMail } from 'react-icons/ci';
import star from '../../assets/images/icon/star.png'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import AddToCartBtn from '../AddToCartBtn/AddToCartBtn';

const ProductDetails = () => {
    const axiosPublic = UseAxiosPublic()
    const { id } = useParams()


    const { data: detailsProduct = []} = useQuery({
        queryKey: ['details'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/allProducts/${id}`)
            
            return res.data
        }
    })

    return (
        <div className='pt-28 pb-28'>
            <div className='bg-white xl:w-[1340px] mx-auto flex gap-10 p-8 rounded-md'>
                <div className='xl:w-1/2'>
                    <img src={detailsProduct.image} className='xl:w-full xl:h-[509px]' alt="" />
                </div>
                <div className='xl:w-1/2 text-black'>
                    <div className='flex justify-between items-center'>
                        <h1 className='text-5xl text-black'>{detailsProduct.name}</h1>
                        <div className='flex text-black gap-3'>
                            <FaFacebookSquare size={25}></FaFacebookSquare>
                            <FaTwitter size={25}></FaTwitter>
                            <FaLinkedin size={25}></FaLinkedin>
                            <CiMail size={25}></CiMail>
                        </div>
                    </div>
                    <div className='flex items-center gap-4 pt-6'>
                        <img src={star} alt="" />
                        <p>{detailsProduct.review} Customer Review</p>
                    </div>
                    <div className='border my-8'></div>
                    <h1 className='text-[#3B4DF0] text-xl font-semibold'>${detailsProduct.price}</h1>
                    <div className='flex items-center gap-10 pt-4'>
                        <AddToCartBtn product={detailsProduct}></AddToCartBtn>
                        <button className="btn w-52 py-6 btn-primary">Buy Now</button>
                        <CiHeart size={60} className='border p-2'></CiHeart>
                    </div>
                </div>
            </div>



            {/* TAB */}
           <div className='pt-[70px]  pb-[80px] text-black'>
           <div className='bg-white xl:w-[1340px] mx-auto '>
                <Tabs className='p-10'>
                    <TabList>
                        <Tab>Description</Tab>
                        <Tab>Additional information</Tab>
                        <Tab>Review</Tab>
                    </TabList>

                    <TabPanel>
                        <div>
                        <h1 className='text-lg'>{detailsProduct.description}</h1>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <p>
                            <b>Luigi</b> (<i>Japanese: ルイージ Hepburn: Ruīji, [ɾɯ.iː.dʑi̥]</i>) (<i>English: /luˈiːdʒi/;
                                Italian: [luˈiːdʒi]</i>) is a fictional character featured in video games and related media
                            released by Nintendo. Created by prominent game designer Shigeru Miyamoto, Luigi is portrayed
                            as the slightly younger but taller fraternal twin brother of Nintendo's mascot Mario, and
                            appears in many games throughout the Mario franchise, often as a sidekick to his brother.
                        </p>
                        <p>
                            Source:{' '}
                            <a href="https://en.wikipedia.org/wiki/Luigi" target="_blank">
                                Wikipedia
                            </a>
                        </p>
                    </TabPanel>
                    <TabPanel>
                        <p>
                            <b>Princess Peach</b> (<i>Japanese: ピーチ姫 Hepburn: Pīchi-hime, [piː.tɕi̥ çi̥.me]</i>)
                            is a character in Nintendo's Mario franchise. Originally created by Shigeru Miyamoto,
                            Peach is the princess of the fictional Mushroom Kingdom, which is constantly under
                            attack by Bowser. She often plays the damsel in distress role within the series and
                            is the lead female. She is often portrayed as Mario's love interest and has appeared
                            in Super Princess Peach, where she is the main playable character.
                        </p>
                        <p>
                            Source:{' '}
                            <a href="https://en.wikipedia.org/wiki/Princess_Peach" target="_blank">
                                Wikipedia
                            </a>
                        </p>
                    </TabPanel>
                    <TabPanel>
                        <p>
                            <b>Yoshi</b> (<i>ヨッシー Yosshī, [joɕ.ɕiː]</i>) (<i>English: /ˈjoʊʃi/ or /ˈjɒʃi/</i>), once
                            romanized as Yossy, is a fictional anthropomorphic dinosaur who appears in
                            video games published by Nintendo. Yoshi debuted in Super Mario World (1990) on the
                            Super Nintendo Entertainment System as Mario and Luigi's sidekick. Yoshi later starred
                            in platform and puzzle games, including Super Mario World 2: Yoshi's Island, Yoshi's Story
                            and Yoshi's Woolly World. Yoshi also appears in many of the Mario spin-off games, including
                            Mario Party and Mario Kart, various Mario sports games, and Nintendo's crossover fighting
                            game series Super Smash Bros. Yoshi belongs to the species of the same name, which is
                            characterized by their variety of colors.
                        </p>
                        <p>
                            Source:{' '}
                            <a href="https://en.wikipedia.org/wiki/Yoshi" target="_blank">
                                Wikipedia
                            </a>
                        </p>
                    </TabPanel>
                </Tabs>
            </div>
           </div>
           {/* <NewsletterSubscribe></NewsletterSubscribe> */}
        </div>
    );
};

export default ProductDetails;