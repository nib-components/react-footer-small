import React, {PropTypes} from 'react';

export default class FooterSmall extends React.Component {
  render() {
    let currentYear = new Date().getFullYear();
    const fundRulesUrl = this.props.fundRulesUrl || 'https://www.nib.com.au/health-information/content/assets/pdf/nib-fund-rules.pdf';

    return (
      <footer className="nib-footer nib-footer--small">
        <div className="nib-footer__body">

          <div className="nib-footer__copyright">

            <div className="nib-footer__copyright-text">
              Copyright <span>&copy;</span> {currentYear} nib health funds limited ABN 83 000 124 381
            </div>

            <nav id="ga-footer-copyright-links" className="nib-footer__copyright-links">
              <a className="nib-footer__copyright-link" id="ga-footer-fund-rules" href={fundRulesUrl}>Fund Rules</a>
              <a className="nib-footer__copyright-link" id="ga-footer-terms" href="https://www.nib.com.au/legal/terms-and-conditions">Terms &amp; Conditions</a>
              <a className="nib-footer__copyright-link" id="ga-footer-privacy" href="https://www.nib.com.au/legal/privacy-policy">Privacy Policy</a>
              <a className="nib-footer__copyright-link" id="ga-footer-code-conduct" href="https://www.nib.com.au/legal#codeofconduct">Code of Conduct</a>
              <a className="nib-footer__copyright-link nib-footer__copyright-link--phone-number" id="ga-footer-call-mobile" href="tel:131642">
                <i className="v2-icon v2-icon--phone"/>13 16 42
              </a>
            </nav>
        </div>
      </div>

    </footer>
  );
  }
}

FooterSmall.propTypes = {
  fundRulesUrl: PropTypes.string
};
