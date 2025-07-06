import FeaturedBusinesses from '../../components/FeaturedBusinesses';
import QuickRideOptions from '../../components/QuickRideOptions';
import RecentActivity from '../../components/RecentActivity';

const Newsfeed = () => {
  return (
    <>
     <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">Welcome to Nairobi Konnekt</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FeaturedBusinesses className="col-span-1 md:col-span-2" />
              <QuickRideOptions />
              <RecentActivity className="col-span-1 md:col-span-3" />
            </div>
    </>
  )
}

export default Newsfeed