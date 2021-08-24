import React from 'react';
import styled from 'styled-components';
import {DisplayFilter} from './';

export const FilterHeader = ({ page, userState, setUserState}) => {

    return (
        <Header>
            <h2>{page}</h2>
            <DisplayFilter userState={userState} setUserState={setUserState} />
        </Header>
    );
};

const Header = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    h2 {
        padding-left: 2rem;
    }
    div {
        padding-right: 2rem;
    }
    position: fixed;
    top: 4rem;
    background-color: #999;
    z-index: 9999;
`;

export default FilterHeader;
