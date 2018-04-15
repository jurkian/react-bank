import Loadable from 'react-loadable';
import Loader from 'components/UI/Loader';

const AsyncComponentLoader = opts =>
   Loadable({
      loading: Loader,
      ...opts
   });

export default AsyncComponentLoader;
