---
sidebar_position: 11
---

# Integration with MetahOS

**This document outlines how MetahOS works with other systems when it comes to providing a single seamless delivery.**

## MetahOS Middleware

Built-in Node.js and supported by Python and a stream of databases both SQL and NoSQL MetahOS Middleware / Integration Engine has the ability to connect disparate source & destination systems and transform data in real-time as well as for bulk back load using ETL or ELT depending on the scenario.

The built-in connectors can understand and transform Data Formats and Data Transport Mechanisms as well.

1.  HL7 2.X over TCP/IP
2.  FHIR over API
3.  CSV, TSV, PSV
4.  Custom API
5.  SFTP
6.  CCD, CCD-A
7.  X12
8.  Discrete data
9.  Diagnostic images and labs
10. Patient/Device generated data

For Example the following illustrations show various scenarios executed by MetahOS Middleware.​​

![enter image description here](https://res.cloudinary.com/teleopdassets/image/upload/v1642252199/Guide/Integration/MetahOS_for_Hospitals_Pitch_Deck_f4hrpm.png)

MetahOS Middleware has the ability to connect the Data Lake to various systems and not limited to a specific hospital. MetahOS Middleware can connect and acquire data from HIS, EMRs, HIEs and other systems,

## Data Types

### Clinical Data

Clinical data falls into six major types:

#### Electronic health records

Electronic clinical data which is obtained at the point of care at a medical facility, hospital, clinic or practice. Often referred to as the electronic medical record (EMR), the EMR is generally not available to outside researchers. The data collected includes administrative and demographic information, diagnosis, treatment, prescription drugs, laboratory tests, physiologic monitoring data, hospitalization, patient insurance, etc.

#### Administrative data

Often associated with electronic health records, these are primarily hospital discharge data

#### Claims data

Claims data describe the billable interactions (insurance claims) between insured patients and the healthcare delivery system. Claims data falls into four general categories: inpatient, outpatient, pharmacy, and enrollment. The sources of claims data can be obtained from the government (e.g., Medicare) and/or commercial health firms (e.g., United HealthCare).

##### Basic Stand Alone (BSA) Medicare Claims Public Use Files (PUFs)

This is the Basic Stand Alone (BSA) Public Use Files (PUF) for Medicare claims. This is a claim-level file in which each record is a claim incurred by a 5% sample of Medicare beneficiaries. Claims include inpatient/outpatient care, prescription drugs, DME, SNF, hospice, etc. There are some demographic and claim-related variables provided in every PUF.

##### Medicare Provider Utilization and Payment Data

Data that summarize utilization and payments for procedures, services, and prescription drugs provided to Medicare beneficiaries by specific inpatient and outpatient hospitals, physicians, and other suppliers.

##### Medicaid Data Sources

The Medicaid Analytic eXtract data contains state-submitted data on Medicaid eligibility, service utilization and payments. The CMS-64 provides data on Medicaid and SCHIP Budget and Expenditure Systems.

##### Medicaid Statistical Information System

MSIS is the basic source of state-submitted eligibility and claims data on the Medicaid population, their characteristics, utilization, and payments and is available by clicking on the link on the left-side column.

#### Patient / Disease registries

Disease registries are clinical information systems that track a narrow range of key data for certain chronic conditions such as Alzheimer's Disease, cancer, diabetes, heart disease, and asthma. Registries often provide critical information for managing patient conditions.

#### Health surveys

In order to provide an accurate evaluation of the population health, national surveys of the most common chronic conditions are generally conducted to provide prevalence estimates. National surveys are one of the few types of data collected specifically for research purposes, thus making it more widely accessible.

##### Medicare Current Beneficiary Survey

The Medicare Current Beneficiary Survey (MCBS) is a continuous, multipurpose survey of a nationally representative sample of the Medicare population. The central goals of MCBS are to determine expenditures and sources of payment for all services used by Medicare beneficiaries.

##### National Health & Nutrition Examination Survey (NHANES)

The National Health and Nutrition Examination Survey (NHANES) is a program of studies designed to assess the health and nutritional status of adults and children in the United States. The survey is unique in that it combines interviews and physical examinations.

##### National Medical Expenditure Survey

The Medical Expenditure Panel Survey (MEPS) is a set of large-scale surveys of families and individuals, their medical providers, and employers across the United States. MEPS is the most complete source of data on the cost and use of health care and health insurance coverage.

##### National Center for Health Statistics

A rich source of health data and statistics on a variety of topics.

##### CMS Data Navigator

Center for Medicare & Medicaid Services - Research, Statistics, Data & Systems

##### National Health and Aging Trends Study (NHATS)

NHATS is a study of Medicare beneficiaries age 65 years and older. The study is being conducted by the Johns Hopkins University Bloomberg School of Public Health, with data collection by Westat, and support from the National Institute on Aging. NHATS is intended to foster research that will guide efforts to reduce disability, maximize health and independent functioning, and enhance quality of life at older ages.

#### Clinical trials data

##### ClinicalTrials.gov

o Registry and results database hosted by the NIH.

o Information on publicly and privately supported clinical studies from around the world.

##### Cochrane Library

o Trials database, CENTRAL, is component of Cochrane Library

o Reports of randomized and quasi-randomized clinical trials taken from Medline, Embase, and elsewhere.

##### WHO International Clinical Trials Registry Platform (ICTRP)

o Clinical trial registration data from over 15 trial registries, including registries from the European Union, Africa, China, Japan, Brazil, and Australia.

o Use "standard search" to look for NCT or ISRCTN numbers cited in articles.

##### European Union Clinical Trials Database

o Protocol and results information on interventional clinical trials conducted in the EU.

o Good source of pediatric drug development trials.

##### CenterWatch

o Portal for actively recruiting pharmaceutical industry-sponsored clinical trials.

##### OpenTrials (beta)

o Goal of this project is to locate, match, and share all publicly accessible data on all trials.

o Data sources to include trial registries, journal articles, and regulatory documents.

o Funded by Center for Open Science

#### Clinical Research Datasets

Clinical research data may be available through national or discipline-specific organizations. Level of access is likely restricted but available through proper channels.

Proprietary research data may also be available through individual agreements with private companies.

##### Biologic Specimen and Data Repository Information Coordinating Center (NHLBI)

Listing of studies with resources available for searching and request via BioLINCC.

##### Biomedical Translational Research Information System (BTRIS)

Research data available to the NIH intramural community only.

##### Clinical Data Study Request

Clinical trials data. Partners include Pharmaceutical companies.

##### NIMH Clinical Trials - Limited Access Datasets

Requirements for access at the bottom of the page.

##### YODA (Yale Open Data Access)

Access to participant-level clinical research data and/or comprehensive reports of clinical research. Partners include Medtronic and Johnson & Johnson.
