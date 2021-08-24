
export const getDemocrats = (data) => {
    if (data) {
        return data.filter(r => {
            return (r.party === 'democrat' || r.party === 'independent');
        });
    }
};

export const getRepublicans = (data) => {
    if (data) {
        return data.filter(r => {
            return r.party === 'republican';
        });
    }
};

export const filterByState = (userState, user, data, setFiltered) => {
    switch (userState) {
        case 'mine':
            user && setFiltered(
                data.filter(d => {
                    return d.state_code === user.state;
                })
            );
            break;
        case 'all':
            setFiltered(data);
            break;
        default:
            setFiltered(
                data.filter(d => {
                    return d.state_code === userState;
                })
            );
            break;
    }
}
