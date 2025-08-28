// globalNavbar.js
const navbarHTML = `
<nav>
  <div class="logo">S3 Hirewise Solution</div>
  <div class="menu-toggle" onclick="toggleMenu()">
      <span></span>
      <span></span>
      <span></span>
  </div>
  <ul class="menu">
      <li><a href="/index.html">Home</a></li>
      <li>
          <a href="#" onclick="toggleDropdown(event, 'dropdown')">Services</a>
          <div class="dropdown" id="dropdown">
              <div class="dropdown-column">
                  <h3>Digitization</h3>
                  <ul>
                      <li><a href="/Digital Advisory.html" onclick="closeDropdowns()">Digital Advisory</a></li>
                      <li><a href="/Software Prototyping.html" onclick="closeDropdowns()">Software Prototyping</a></li>
                      <li><a href="/Planning & Execution.html" onclick="closeDropdowns()">Planning & Execution</a></li>
                      <li><a href="/UI&UX Services.html" onclick="closeDropdowns()">UI/UX Services</a></li>
                  </ul>
              </div>
              <div class="dropdown-column">
                  <h3>Software Development</h3>
                  <ul>
                      <li><a href="/Custom Applications.html" onclick="closeDropdowns()">Custom Applications</a></li>
                      <li><a href="Modernization.html" onclick="closeDropdowns()">Modernization</a></li>
                      <li><a href="Product Development.html" onclick="closeDropdowns()">Product Development</a></li>
                      <li><a href="Support & Maintenance.html" onclick="closeDropdowns()">Support & Maintenance</a></li>
                       <li><a href="Mobile Testing.html" onclick="closeDropdowns()">Mobility</a></li>
                  </ul>
              </div>
              <div class="dropdown-column">
                  <h3>Quality Assurance</h3>
                  <ul>
                      <li><a href="Functional Testing.html" onclick="closeDropdowns()">Functional Testing</a></li>
                      <li><a href="Test Automation.html" onclick="closeDropdowns()">Test Automation</a></li>
                      <li><a href="SRE.html" onclick="closeDropdowns()">SRE</a></li>
                      <li><a href="Mobile Testing.html" onclick="closeDropdowns()">Mobile Testing</a></li>
                  </ul>
              </div>
              <div class="dropdown-column">
                  <h3>Cloud Enablement</h3>
                  <ul>
                      <li><a href="Assessment & Migration.html" onclick="closeDropdowns()">Assessment & Migration</a></li>
                      <li><a href="Infrastructure Services.html" onclick="closeDropdowns()">Infrastructure Services</a></li>
                      <li><a href="Security & Resilience.html" onclick="closeDropdowns()">Security & Resilience</a></li>
                      <li><a href="Government Cloud.html" onclick="closeDropdowns()">Government Cloud</a></li>
                  </ul>
              </div>
              <div class="dropdown-column">
                  <h3>Automation</h3>
                  <ul>
                      <li><a href="Hyperautomation.html" onclick="closeDropdowns()">Hyperautomation</a></li>
                      <li><a href="RPA.html" onclick="closeDropdowns()">RPA</a></li>
                      <li><a href="BPM.html" onclick="closeDropdowns()">BPM</a></li>
                      <li><a href="Low Code.html" onclick="closeDropdowns()">Low Code</a></li>
                      <li><a href="Pega.html" onclick="closeDropdowns()">Pega</a></li>
                  </ul>
              </div>
              <div class="dropdown-column">
                  <h3>CRM</h3>
                  <ul>
                      <li><a href="Salesforce.html" onclick="closeDropdowns()">Salesforce</a></li>
                      <li><a href="ServiceNow.html" onclick="closeDropdowns()">ServiceNow</a></li>
                      <li><a href="Microsoft Dynamics 365 CE.html" onclick="closeDropdowns()">Microsoft Dynamics 365 CE</a></li>
                      
                      <li><a href="Oracle.html" onclick="closeDropdowns()">Oracle</a></li>
                  </ul>
              </div>
              <div class="dropdown-column">
                  <h3>ERP</h3>
                  <ul>
                      
                      <li><a href="SAP.html" onclick="closeDropdowns()">SAP</a></li>
                      <li><a href="Microsoft Dynamics 365.html" onclick="closeDropdowns()">Microsoft Dynamics 365</a></li>
                  </ul>
              </div>
              <div class="dropdown-column">
                  <h3>AI/ML & Data</h3>
                  <ul>
                      <li><a href="AI&ML & Analytics.html" onclick="closeDropdowns()">AI/ML & Analytics</a></li>
                      <li><a href="Data Engineering.html" onclick="closeDropdowns()">Data Engineering</a></li>
                  </ul>
              </div>
          </div>
      </li>
      <li>
          <a href="#" onclick="toggleDropdown(event, 'dropdowns')">Industries</a>
          <div class="dropdowns" id="dropdowns">
              <div class="industries-dropdown-column">
                  <ul>
                      <li><a href="Manufacturing.html" onclick="closeDropdowns()">Manufacturing</a></li>
                      <li><a href="BFSI.html" onclick="closeDropdowns()">BFSI</a></li>
                      <li><a href="Retail.html" onclick="closeDropdowns()">Retail</a></li>
                      <li><a href="Agriculture.html" onclick="closeDropdowns()">Agriculture</a></li>
                  </ul>
              </div>
              <div class="industries-dropdown-column">
                  <ul>
                      <li><a href="Corporate Services.html" onclick="closeDropdowns()">Corporate Services</a></li>
                      <li><a href="Education.html">Education</a></li>
                      <li><a href="Healthcare.html" onclick="closeDropdowns()">Healthcare</a></li>
                      <li><a href="Energy & Utilities.html" onclick="closeDropdowns()">Energy & Utilities</a></li>
                  </ul>
              </div>
          </div>
      </div>
</li>
<li><a href="#" onclick="closeDropdowns()">Careers</a></li>
<li><a href="/index.html#about">About Us</a></li>
</ul>
</nav>
`;
