import React from 'react'
import CommunityPage from '../components/community/community.page'
import { getCommunities } from '../actions'

const Community = () => {

    React.useEffect(() => {
        getCommunities()
    }, [])

    return (
        <div>
            <CommunityPage />
        </div>
    )
}

export default Community
