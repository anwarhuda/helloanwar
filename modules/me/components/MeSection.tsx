import SocialMedia from '@/common/components/elements/SocialMedia';
import { SOCIAL_MEDIA } from '@/common/constant/menu';
import CurrentlyWorking from './CurrentlyWorking';
import ProfileInfo from './ProfileInfo';

const filteredSocialMedia = SOCIAL_MEDIA?.filter(item => item?.isShow);

function MeSection() {
  return (
    <>
      <ProfileInfo />
      <CurrentlyWorking />
      <SocialMedia items={filteredSocialMedia} isMePage />
    </>
  );
}

export default MeSection;
