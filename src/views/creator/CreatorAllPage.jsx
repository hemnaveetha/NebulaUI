import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectAllCreators, selectAllCreatorsStatus, selectCreatorsNextPage, selectCreatorsPrevPage } from '../../redux/store/creatorSlice';
import { fetchAsyncCreators } from '../../redux/utils/creatorUtils';
import { Pagination, Preloader, Title } from '../../components/common';
import { STATUS } from '../../utils/status';
import GameCard from './GameCard';

const backgroundImages = [
    { url: 'https://mir-s3-cdn-cf.behance.net/projects/404/e9c4a3143005095.Y3JvcCw4NjksNjgwLDI1LDA.png', route: '/Game1.html' },
    { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDTCaQXrFL2GgjFvk_2aaKhMJQwTRP6fJEgGWyi1Z99PV65dA43wAD2KGe9BBcuBqjMYk&usqp=CAU', route: '/Game2.html' },
    { url: 'src/assets/images/Gorilla_game.jpg', route: '/Game3.html' },
    { url: 'https://img.gamepix.com/games/snake-challenge/cover/snake-challenge.png?w=400', route: '/Game4.html' },
    // { url: 'https://i.pinimg.com/736x/99/52/5e/99525ef0bf1ef361a6db0a7b49eac1bd.jpg' },
    // { url: 'https://i.pinimg.com/736x/ee/12/d6/ee12d6006383f9c31789d51272777f5b.jpg' },
    // { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG5m6aXRp4tKB40EvWD0aSwkXz6xgemPWG8w&s' },
    // { url: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F01%2Fdragonest-auto-chess-moba-spinoff-game-000.jpg?w=960&cbr=1&q=90&fit=max' },
];

const CreatorAllPage = () => {
    const dispatch = useDispatch();
    const creators = useSelector(selectAllCreators);
    const creatorsStatus = useSelector(selectAllCreatorsStatus);
    const nextPage = useSelector(selectCreatorsNextPage);
    const prevPage = useSelector(selectCreatorsPrevPage);
    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(fetchAsyncCreators(page));
    }, [dispatch, page]);

    const pageHandler = (pageValue) => setPage(pageValue);

    return (
        <CreatorAllPageWrapper>
            <div className='sc-creators section'>
                <div className='container'>
                    <Title titleName={{
                        firstText: "OUR",
                        secondText: "GAMES"
                    }} />
                    {/*{
                        creatorsStatus === STATUS.LOADING ? <Preloader /> :
                        creators?.length > 0 ? (
                            <>
                                <CreatorList creators={creators} />
                                <Pagination 
                                    pageHandler={pageHandler} 
                                    nextPage={nextPage} 
                                    prevPage={prevPage} 
                                    currentPage={page} 
                                />
                            </>
                        ) : "No creators found!"
                    */}
                    <GameCardsWrapper>
                        {backgroundImages.map((item, index) => (
                            <a key={index} href={item.route || '#'} rel="noopener noreferrer">
                                <GameCard
                                    title={`Game ${index + 1}`}
                                    description={`Description for game ${index + 1}`}
                                    backgroundImage={item.url}
                                    route={item.route || '#'}
                                />
                            </a>
                        ))}
                    </GameCardsWrapper>
                </div>
            </div>
        </CreatorAllPageWrapper>
    );
}

export default CreatorAllPage;

const CreatorAllPageWrapper = styled.div`
    background-color: var(--clr-violet-dark-active);
    .sc-creators {
        min-height: 100vh;
        padding-top: 65px;
    }
`;

const GameCardsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 20px;
`;
