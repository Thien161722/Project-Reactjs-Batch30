import React from 'react'
import AboutUs from '../Component/AboutUs';
import ContactInfo from '../Component/ContactInfo';
import ContactInforItem from '../Component/ContactInforItem';
import CustomerService from '../Component/CustomerService';
import CustomerServiceItem from '../Component/CustomerServiceItem';
import PoppularTag from '../Component/PoppularTag';
import PopularTagItem from '../Component/PopularTagItem';
import Copyright from '../Component/Copyright';
import { InfoItem } from '../data/FooterInfoItem';
import { ServiceItem } from '../data/FooterServiceItem';
import { TagItem } from '../data/FooterTagItem';

const PageFooter = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-row flex md-flex-wrap">
          <AboutUs
            link="/"
            label="Elictrican"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec
        vestibulum magna, et dapibus lacus. Duis nec vestibulum magna, et
        dapibus lacus."
          />
          <ContactInfo>
            {InfoItem.map((infoItem) => {
              return (
                <ContactInforItem
                  key={`infoItem${infoItem.id}`}
                  infoLabel={infoItem.infoLabel}
                  infoLink={infoItem.infoLink}
                  infoLinkLabel={infoItem.infoLinkLabel}
                  info={infoItem.info}
                />
              );
            })}
          </ContactInfo>
          <CustomerService>
            {ServiceItem.map((serviceItem) => {
              return (
                <CustomerServiceItem
                  key={`serviceItem${serviceItem.id}`}
                  link={serviceItem.link}
                  target={serviceItem.target}
                  label={serviceItem.label}
                />
              );
            })}
          </CustomerService>
          <PoppularTag>
            {TagItem.map((tagItem) => {
              return (
                <PopularTagItem
                  key={`tagItem${tagItem.id}`}
                  link={tagItem.link}
                  target={tagItem.target}
                  label={tagItem.label}
                />
              );
            })}
          </PoppularTag>
        </div>
        <Copyright content="© Aptech eCommerce. 2022. All Rights Reserved" />
      </div>
    </footer>
  )
}

export default PageFooter