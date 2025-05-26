### **Archaeological Scanning & Digital Preservation Knowledge Bank**

*A public-facing, self-contained reference compiled from our internal business-intelligence knowledge base (latest revision May 2025).*

---

## 1. Scan-Quality & Coverage Metrics

| Concept                                                  | Description                                                                                                                       | Formula / Definition                                                                                                                                                       |
| -------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Scan Resolution Index (SRI)**                          | Compound index measuring overall resolution quality; *lower* values mean better resolution and balanced parameters.               | $\displaystyle \text{SRI}= \frac{\log_{10}\!\bigl(\text{Scan Resolution (mm)}\times10^{3}\bigr)}{\log_{10}(\text{Point Density})}\times5$                                  |
| **Scan Coverage Effectiveness (SCE)**                    | Gauges how well a scan covers its target, blending coverage and overlap redundancy. Higher is better.                             | $\displaystyle \text{SCE}= \text{Coverage (\%)} \times \Bigl[1+\frac{\text{Overlap (\%)}}{100}\!\left(1-\frac{\text{Coverage (\%)}}{100}\right)\Bigr]$                     |
| **Scan Quality Score (SQS)**                             | Comprehensive quality metric coupling resolution, coverage, and noise (resolution weighted most heavily).                         | $\displaystyle \text{SQS}= \left(\frac{10}{\text{SRI}}\right)^{1.5}\!\times\!\left(\frac{\text{SCE}}{100}\right)\!\times\!\left(1-\frac{\text{Noise (dB)}}{30}\right)^{2}$ |
| **Scan Time Efficiency (STE)**                           | How efficiently scanning time was used relative to quality and completeness.                                                      | $\displaystyle \text{STE}= \frac{\text{SQS}\,\sqrt{\text{Coverage (\%)}}}{\text{Duration (min)} \times \sqrt{\text{Number of Scans}}}$                                     |
| **Environmental Suitability Index (ESI)**                | Rates how well ambient conditions suited scanning. Higher = more ideal.                                                           | $\displaystyle \text{ESI} = 100 - 2.5 \cdot \|\text{Temp} - 20\| - \|\frac{\text{Humidity} - 50}{2}\|^{1.5} - \frac{600}{\text{Illumination} + 100}$ |
| **Environmental Impact Factor (EIF)**                    | Quantifies how much environment affected scan quality. Values near 100 ⇒ minimal impact.                                          | $\displaystyle \text{EIF}= \frac{\text{SQS}}{\text{ESI}+10}\times100$                                                                                                      |
| **Optimal Scanning Conditions**                          | Defined as **ESI > 85**—moderate temperature, \~50 % humidity, ample light.                                                       |                                                                                                                                                                            |
| **Environmental Condition Classification System (ECCS)** | • *Optimal* (ESI > 85)  • *Good* (70–85)  • *Acceptable* (50–70)  • *Challenging* (< 50). Guides scheduling and equipment choice. |                                                                                                                                                                            |
| **Environmental Challenge Scan**                         | A scan where **EIF > 120**, proving successful data capture despite difficult conditions.                                         |                                                                                                                                                                            |

---

## 2. Point-Cloud & Spatial Metrics

| Concept                              | Description                                                                         | Formula / Definition                                                                                                                                                       |
| ------------------------------------ | ----------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Point Cloud Density Ratio (PCDR)** | Assesses efficiency of point distribution over area. Higher = more efficient.       | $\displaystyle \text{PCDR}= \frac{\text{Total Points}}{\text{Point-Cloud Density Code}\times\text{Area (m²)}}$                                                             |
| **Spatial Density Index (SDI)**      | Determines whether spatial sampling is sufficient for site size.                    | $\displaystyle \text{SDI}= \frac{\text{Total Points}}{\text{Area (m²)}\times10^{4}}\times\!\Bigl(\frac{\text{Point Density}}{\text{Point-Cloud Density Code}}\Bigr)^{0.5}$ |
| **Spatially Complex Site**           | A site with **Area > 100 m²** *and* **SDI > 50**—requires multi-station strategies. |                                                                                                                                                                            |

---

## 3. Mesh & 3-D Model Metrics

| Concept                         | Description                                                                             | Formula / Definition                                                                                                                 |
| ------------------------------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| **Mesh Complexity Ratio (MCR)** | Relates face count to resolution; indicates topological richness.                       | $\displaystyle \text{MCR}= \frac{\text{Mesh Faces}}{\text{Mesh Vertices}\times\text{Mesh Resolution (mm)}^{2}}\times10^{3}$          |
| **Texture Density Index (TDI)** | Pixel density of textures relative to geometric complexity.                             | $\displaystyle \text{TDI}= \frac{\text{Texture Size (px)}}{\sqrt{\text{Mesh Faces}}\times\text{Mesh Resolution (mm)}}\times10^{-2}$  |
| **Model Fidelity Score (MFS)**  | Combines topology, texture, and geometric accuracy for overall fidelity.                | $\displaystyle \text{MFS}= \text{MCR}\times\!\Bigl(\tfrac{\text{TDI}}{10}\Bigr)\times\!\bigl(1+e^{-\text{Geom Accuracy (mm)}}\bigr)$ |
| **Mesh-to-Point Ratio (MPR)**   | Measures decimation efficiency when generating meshes.                                  | $\displaystyle \text{MPR}= \frac{\text{Mesh Vertices}}{\text{Total Points}}\times100\times\Bigl(\tfrac{\text{MCR}}{10}\Bigr)^{0.3}$  |
| **High-Fidelity Mesh**          | Criteria: **MCR > 5.0**, **Mesh Resolution < 1.0 mm**, **Geometric Accuracy < 0.5 mm**. |                                                                                                                                      |
| **Mesh Quality Classification** | • *Has High-Fidelity Meshes*  • *Standard Mesh Quality*  • *No Mesh Data*               |                                                                                                                                      |
| **Resource-Intensive Model**    | Any model with **Mesh Faces > 2 M** *and* **MPR < 15**; needs high-end hardware.        |                                                                                                                                      |

---

## 4. Processing & Equipment Performance

| Concept                                   | Description                                                                     | Formula / Definition                                                                                                                                                                                                              |
| ----------------------------------------- | ------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Processing Efficiency Ratio (PER)**     | Efficiency of processing time vs. data size and complexity.                     | $\displaystyle \text{PER}= \frac{\text{File Size (GB)}\;\log_{10}(\text{Total Points})}{\text{Processing Hours}\times (\text{CPU \%}+\text{GPU \%})/200}$                                                                         |
| **Processing Resource Utilization (PRU)** | How economically CPU/GPU hours were spent for mesh complexity.                  | $\displaystyle \text{PRU}= \frac{\text{Processing Hours}\times(\text{CPU \%}+\text{GPU \%})/2}{\text{File Size (GB)}\times10\;\log_{10}(\text{Mesh Vertices}+10^{4})}$                                                            |
| **Processing Bottleneck**                 | **PER < 0.5** ⇒ probable hardware or workflow constraint.                       |                                                                                                                                                                                                                                   |
| **Workflow Efficiency Classification**    | • *Optimized* (PRU < 5)  • *Acceptable* (5–10)  • *Needs Optimization* (> 10)   |                                                                                                                                                                                                                                   |
| **Processing Optimized Workflow**         | *PRU < 5* **and** *MFS > 7.0*—balanced quality & resources.                     |                                                                                                                                                                                                                                   |
| **Equipment Effectiveness Ratio (EER)**   | Utilization of equipment condition, power and scan quality.                     | $\displaystyle \text{EER}= \frac{\text{SQS} \times \text{EquipConditionFactor}}{\text{Battery \%}\left(1-\frac{\text{Days since Calibration}}{365}\right)} \times25$ (where EquipConditionFactor = 1.0 – 0.2 for Excellent→Poor). |
| **Equipment Optimization Opportunity**    | **EER < 30** *and* **ESI > 80**—favourable conditions but sub-optimal settings. |                                                                                                                                                                                                                                   |

---

## 5. Registration & Alignment Accuracy

| Concept                               | Description                                                                            | Formula / Definition                                                                                                                                                                  |
| ------------------------------------- | -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Registration Accuracy Ratio (RAR)** | Tests whether alignment accuracy surpasses scan resolution.                            | $\displaystyle \text{RAR}= \frac{\text{Scan Resolution (mm)}}{\text{Registration Accuracy (mm)}\;\sqrt{1+\tfrac{\text{Registration Error (mm)}}{\text{Registration Accuracy (mm)}}}}$ |
| **Registration Quality Threshold**    | Acceptable registration if **Accuracy < 1 mm** *and* **Error < 2 mm**.                 |                                                                                                                                                                                       |
| **Registration Confidence Level**     | *High* : **RAR > 1.5** & method includes “Target” • *Medium* : 1.0–1.5 • *Low* : < 1.0 |                                                                                                                                                                                       |

---

## 6. Composite Documentation & Preservation Metrics

| Concept                                             | Description                                                                                                                                                                                                                               | Formula / Definition                                                                                                                                                    |
| --------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Archaeological Documentation Completeness (ADC)** | Aggregates SQS, MFS & SCE against noise.                                                                                                                                                                                                  | $\displaystyle \text{ADC}= 0.4\,\text{SQS}+0.4\,\text{MFS}+0.2\,\text{SCE}-5\sqrt{\tfrac{\text{Noise (dB)}}{10}}$                                                       |
| **Digital Preservation Quality (DPQ)**              | Holistic score blending documentation, fidelity, registration & coverage.                                                                                                                                                                 | $\displaystyle \text{DPQ}= 0.3\,\text{ADC}+0.3\,\text{MFS}+0.2\,\text{RAR}+0.2\,\text{SCE}-2\sqrt{\tfrac{\text{Registration Error (mm)}}{\text{Scan Resolution (mm)}}}$ |
| **Scan Coverage Definitions**                       | **High Resolution Scan** : Scan‐resolution ≤ 1 mm & density ≥ 1,000 pts/m²<br>**Comprehensive Coverage** : Coverage ≥ 95 % & Overlap ≥ 30 %<br>**Premium Quality Scan** : High-Resolution *and* Comprehensive Coverage with **SQS > 7.5** |                                                                                                                                                                         |
| **Full Archaeological Digital Twin**                | A site possessing Premium Quality Scans, a High-Fidelity Mesh, Registration Quality Threshold met, **ADC > 85**.                                                                                                                          |                                                                                                                                                                         |
| **Multi-Phase Documentation Project**               | Projects where individual scans have **ADC < 70**, yet combined **DPQ > 80**, showing holistic success through phased strategy.                                                                                                           |                                                                                                                                                                         |

---

## 7. Conservation & Risk Assessment

| Concept                               | Description                                                                                                                                                                                                                                                                                                         | Formula / Definition |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| **Degradation Risk Zone**             | Sites with Preservation Status = *Poor*/*Critical* **and** Structure State ≠ *Stable*.                                                                                                                                                                                                                              |                      |
| **Conservation Priority Index (CPI)** | Combines condition, age & rarity.  <br>For Risk-Zone sites: $100 - \text{PS} + \text{Age}_{\text{(kyr)}}\!\left(1+\tfrac{\text{Type Site Score}}{10}\right)$ <br>Otherwise: $50 - \text{PS} + \text{Age}_{\text{(kyr)}}\!\left(1+\tfrac{\text{Type Site Score}}{20}\right)$ <br>(PS: 10–90 scale, lower is better). |                      |
| **Conservation Emergency**            | Risk-Zone site with **CPI > 75** → needs immediate action and Premium Quality Scans.                                                                                                                                                                                                                                |                      |
| **Digital Conservation Priority**     | Risk-Zone sites older than 1000 BCE *or* classed as *Rare/Unique* artifacts receive top digital-preservation priority.                                                                                                                                                                                              |                      |
| **High Temporal Value Site**          | Sites dated *before 500 CE* with **CPI > 60**—exceptional historical significance.                                                                                                                                                                                                                                  |                      |
| **Risk Zone Category**                | *Degradation Risk Zone* **vs.** *Not in Risk Zone*.                                                                                                                                                                                                                                                                 |                      |

---

## 8. Feature-Extraction & Texture Analysis

| Concept                                 | Description                                                                                                   | Formula / Definition                                                                                                                 |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| **Feature Extraction Efficiency (FEE)** | Detects efficiency of feature & artifact identification.                                                      | $\displaystyle \text{FEE}= \frac{\text{Features}+\text{Artifacts}}{\text{PCDR}\,\sqrt{\text{Point-Cloud Density Code}}}\times10^{3}$ |
| **Texture-Critical Artifact**           | An artifact where Texture Study requires “Detailed/Critical” *and* **TDI > 8.0**, demanding advanced imaging. |                                                                                                                                      |

---

## 9. Classification Systems & Domain Standards

*These domain rules draw upon the metrics above to guide project planning, resource allocation and reporting.*

* **Premium Quality Scan** (see §6)
* **High-Fidelity Mesh** (see §3)
* **Full Archaeological Digital Twin** (see §6)
* **Processing Optimized Workflow** (see §4)
* **Processing Bottleneck** / **Workflow Efficiency Classification** (see §4)
* **Registration Quality Threshold** & **Confidence Levels** (see §5)
* **Environmental Condition Classification System** (see §1)
* **Spatially Complex Site**, **Resource-Intensive Model**, **Texture-Critical Artifact** (see §§2–3, 8)
* **Degradation Risk Zone**, **Conservation Emergency**, **Digital Conservation Priority**, **High Temporal Value Site** (see §7)
* **Equipment Optimization Opportunity** (see §4)

---

## 10. Value Illustrations – Making Numbers Meaningful

*These contextual examples help non-specialists interpret key parameters.*

| Parameter                            | Practical Meaning                                                                     |
| ------------------------------------ | ------------------------------------------------------------------------------------- |
| **Scan Resolution (mm)**             | 0.5 mm → registers fine tool-marks; 2 mm → captures only general forms.               |
| **Point Density (pts/m²)**           | 100 → basic topography • 1 000 → structural detail • 10 000+ → engravings & textures. |
| **Noise Level (dB)**                 | < 1.0 → exceptionally clean data • > 3.0 → feature recognition at risk.               |
| **Coverage (%)**                     | ≥ 95 % → virtually complete site documentation; 80 % leaves significant gaps.         |
| **Geometric Accuracy (mm)**          | < 0.1 mm → museum-grade precision • ≈ 1 mm → suitable for general records.            |
| **Cultural Period** (*Phase Factor*) | E.g. Neolithic, Bronze Age, Roman, Medieval—guides methods & interpretation.          |
| **Estimated Dating** (*Guess Date*)  | Ranges from “3500–3000 BCE” to “ca. 1450 CE”—precision depends on evidence.           |
| **Structural State**                 | *Stable* / *Unstable* / *Critical*—directs urgency of conservation.                   |
| **Processing Stage**                 | *Raw* → *Aligned* → *Cleaned* → *Meshed* → *Textured* milestones.                     |
| **Registration Method**              | *ICP*, *Target-based*, *Hybrid*, *SLAM*—each with distinct accuracy profiles.         |

---

### **How to Use This Knowledge Bank**

1. **Project Planning** – Select equipment and schedule fieldwork by checking *ECCS* and aiming for *Optimal Scanning Conditions*.
2. **Live Quality Control** – Calculate *SRI*, *SCE* and *SQS* on-site for immediate feedback.
3. **Data Processing** – Monitor *PER* and *PRU* to avoid *Processing Bottlenecks*; strive for an *Optimized Workflow*.
4. **Model Assessment** – Employ *MCR*, *TDI* and *MFS* to verify that meshes meet publication-grade fidelity.
5. **Risk-Driven Conservation** – Combine *CPI* with *Degradation Risk Zone* status to trigger timely conservation actions.
6. **Digital Twin Certification** – Confirm that finished datasets meet the *Full Archaeological Digital Twin* standard before archival or public release.

---

