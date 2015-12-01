import React from 'react';

export default class FooterSmall extends React.Component {
  render() {
    let currentYear = new Date().getFullYear();
    return (
      <footer className="nib-footer">
        <div className="nib-footer__body">
          <div className="nib-footer__copyright">
            <div className="nib-footer__copyright-text">Copyright <span>&copy;</span> {currentYear} nib health funds limited ABN 83 000 124 381</div>

            <nav id="ga-footer-copyright-links" className="nib-footer__copyright-links">
              <a className="nib-footer__copyright-link" id="ga-footer-terms" href="/legal/terms-and-conditions">Terms &amp; Conditions</a>
              <a className="nib-footer__copyright-link" id="ga-footer-privacy" href="/legal#privacy">Privacy Policy</a>
              <a className="nib-footer__copyright-link" id="ga-footer-code-conduct" href="/legal#codeofconduct">Code of Conduct</a>
            </nav>
        </div>
      </div>
    </footer>
  );
  }
}