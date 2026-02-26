import Workflow from "../components/AboutUsPage/Workflow"
import AboutUsCTA from "../components/AboutUsPage/AboutUsCTA"
import MissionVision from "../components/AboutUsPage/MissionVision"
import WhoWeAre from "../components/AboutUsPage/WhoWeAre"
import CorporateSolutions from "../components/common/CorporateSolutions"
import CorporateProposalCTA from "../components/AboutUsPage/CorporateProposalCTA"
import AboutTrustBar from "../components/AboutUsPage/AboutTrustbar"
import FAQSection from "../components/common/FAQSection"
import BottomCTA from "../components/common/bottomCTA"

function AboutUsPage() {
  return (
    <>
    <AboutUsCTA/>
    <AboutTrustBar/>
    <WhoWeAre/>
    <MissionVision/>
    <CorporateSolutions/>
    <Workflow/>
    <CorporateProposalCTA/>
    <FAQSection setId="aboutUs"/>
    <BottomCTA/>
    </>
  )
}
export default AboutUsPage