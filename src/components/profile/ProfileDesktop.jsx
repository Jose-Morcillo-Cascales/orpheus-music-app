import { useState } from 'react';
import { useEffect } from 'react';
import { IoMdCreate, IoMdReturnLeft } from 'react-icons/io';
import { useSelector } from 'react-redux';
import useWidth from '../../helper/hooks/useWidth';
import AvatarImg from '../general_components/AvatarImg';
import FooterInfo from '../general_components/FooterInfo';
import { Footer } from '../style/generalStyle';
import { DivProfileActionsStyle, DivProfileBanner, SectionProfileMain, PProfileUserInfo, DivProfileUserInfoContainer, SpanProfileUserNumbers, DivUserGeneralData, H1Username, H2UserWorks, DivProfile, DivUsernameWorks, ButtonEditUser, SectionEditUser } from '../style/profileStyle'
import AddWork from './AddWork';
import CreatePlaylist from './CreatePlaylist';
import UpdateProfile from './UpdateProfile';


const ProfileDesktop = () => {
    const userData = useSelector(state => state.userData.user.userData);
    const width = useWidth();
    const [editView, setEditView] = useState(false);
    const [windowDesk, setWindowDesk] = useState(width > 768 ? true : false);
    useEffect(() => {
        if(width > 768){
            setWindowDesk(prev => prev = true);
        } else if (width < 768) {
            setWindowDesk(prev => prev = false);
        }
    }, [width])


    return (
        <DivProfile>
            
            <DivProfileBanner>
                {!editView
                ?
                <ButtonEditUser onClick={() =>setEditView(prev => prev = true)}>
                    <IoMdCreate />
                </ButtonEditUser>
                :
                <ButtonEditUser onClick={() =>setEditView(prev => prev = false)}>
                    <IoMdReturnLeft />
                </ButtonEditUser>}
                    <AvatarImg
                        size={width > 1050 ? 200 : 140}
                        avatarId={userData.avatar}
                    />
                

                <DivUserGeneralData>
                    <DivUsernameWorks>
                        <H1Username>{userData.username}</H1Username>
                        <H2UserWorks>23 works</H2UserWorks>
                    </DivUsernameWorks>
                    <DivProfileUserInfoContainer>
                        <PProfileUserInfo>
                            <SpanProfileUserNumbers>22</SpanProfileUserNumbers>
                            Playlists
                        </PProfileUserInfo>
                        <PProfileUserInfo>
                            <SpanProfileUserNumbers>22</SpanProfileUserNumbers>
                            Followers
                        </PProfileUserInfo>
                        <PProfileUserInfo>
                            <SpanProfileUserNumbers>22</SpanProfileUserNumbers>
                            Following
                        </PProfileUserInfo>
                    </DivProfileUserInfoContainer>
                </DivUserGeneralData>
                

            </DivProfileBanner>

            {/* Erase when edit     */}
            
            {!editView
            ? 
                <SectionProfileMain>
                    <DivProfileActionsStyle>
                            <AddWork />
                            <CreatePlaylist />
                    </DivProfileActionsStyle>
                        Some extra info
                </SectionProfileMain>
            :
                <SectionEditUser>
                    <UpdateProfile />
                </SectionEditUser>}

            <Footer><FooterInfo /></Footer>
        </DivProfile>
    )
}

export default ProfileDesktop