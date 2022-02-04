import { ServiceCard } from './ServiceCard';
import styles from './styles.module.scss';

export function BoxServiceCard () {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <ServiceCard 
          src='/search_doctor.svg'
          title='Search doctor'
          description='Choose your doctor from thousands of specialist, general, and trusted hospitals'
        />

        <ServiceCard 
          src='/online_pharmacy.svg'
          title='Online pharmacy'
          description='Buy your medicines with our mobile application with a simple delivery system'
        />

        <ServiceCard 
          src='/consultation.svg'
          title='Consultation'
          description='Free consultation with our trusted doctors and get the best recommendations'
        />

        <ServiceCard 
          src='/details_info.svg'
          title='Details info'
          description='Free consultation with our trusted doctors and get the best recommendations'
        />

        <ServiceCard 
          src='/emergency_care.svg'
          title='Emergency care'
          description='You can get 24/7 urgent care for yourself or your children and your lovely family'
        />

        <ServiceCard 
          src='/tracking.svg'
          title='Tracking'
          description='Track and save your medical history and health data'
        />
      </div>
    </div>
  );
}