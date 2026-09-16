---
sidebar_position: 4
---

# Parameters & Interpretation

A lab test is built from **parameters** — the individual measurable lines on a report (for example *Hemoglobin*, *WBC Count*). This page explains how to configure parameters, reference ranges, interpretation, computed (formula) parameters and per-test settings such as turnaround time and barcode identifier. Tests are managed under **Manage Test**.

## At a glance

```steps
fa-flask | Parameter (range, match, normal, label) | Here is what happens at this step.
fa-circle-o | Reference range by age and gender | Here is what happens at this step.
fa-flask | Result inside range? | The lab writes down what they found.
fa-flask | In-range IC, normal label | Here is what happens at this step.
fa-circle-o | Out-of-range IC, abnormal in bold | Here is what happens at this step.
fa-circle-o | Critical IC or flag? | Here is what happens at this step.
fa-user-md | Pathologist alert | Here is what happens at this step.
fa-file-text-o | Report and work-list badges | We make a neat report to share.
```

## Parameter types

Each parameter has a `type` that controls how it behaves:

| Type | Use it for |
| --- | --- |
| `range` | Numeric results compared against a reference range (most common). |
| `match` | Results matched against an expected value (e.g. *Negative*). |
| `normal` | A free-text / descriptive result. |
| `label` | A non-result heading row used to group parameters. |

Parameters also store a unit, default value, methodology, and whether the field is required.

## Reference ranges

A `range` parameter can hold multiple **reference ranges**, each scoped by:

- **Age** (min/max, expressed in Years, Months or Days) and **Gender** (M/F/O), so neonatal, paediatric, adult and gender-specific ranges can coexist on one parameter.
- **Min value / Max value** for the normal band, plus separate **in-range** and **out-of-range interpretation** text.

A **global range** can be set as a fallback when no age/gender-specific range matches.

### Hiding a reference range in print

Each range carries a `hiddenInPrint` flag. When set, that range row is **not shown on the printed report** — useful when an internal range should drive interpretation but should not appear to the patient.

:::tip
Use age/gender-scoped ranges to make a single test correct for every patient demographic, and use `hiddenInPrint` to keep the printed report clean.
:::

### Hiding an empty parameter in print

A parameter can be flagged **hide in print if empty**. A flagged parameter that was left blank is omitted from the printed report, so a report is not padded out with rows the lab did not fill in.

The flag also relaxes validation: a flagged parameter is not treated as required, so a technician can save and submit the report with the field blank.

:::caution The row is hidden, not deleted
A blank flagged parameter is dropped only from the **printed, sent and generated PDF**. It stays in the saved report, so re-opening the report — or turning the flag off later — shows it again.
:::

## Interpretation categories and colour coding

Every parameter result is classified into an **interpretation category** (IC). The categories and their default labels and colours are:

| Category | Default label | Colour |
| --- | --- | --- |
| `IC0` | Neutral | primary |
| `IC1` | Normal | success (green) |
| `IC2` | Abnormal | danger (red) |
| `IC3` | Critical | danger (red) |
| `IC4` | Intermediate | info |
| `IC5` | Moderate | secondary |
| `IC6` | High | danger (red) |
| `IC7` | Low | warning |

A range can assign an **in-range IC** and an **out-of-range IC**, so a result is automatically coloured and labelled when it falls inside or outside the normal band.

The order-level summary rolls these up into `resultingInterpretationCategories` (which ICs are present in the order), powering the colour-coded interpretation badges and counts on the work-list.

## Abnormal values and the "manually changed" flag

- When a result falls outside its range it is flagged **abnormal** (`isAbnormal`) and printed in **bold** on the report so it stands out.
- If a user types over a value by hand, the parameter is marked **manually changed** (`isManuallyChanged`). This distinguishes hand-entered values from analyzer-pushed values.

## Computed (formula) parameters

A parameter can be **computed** from other parameters rather than entered directly. Set a `formula` referencing other parameters (cross-parameter tracking), and MetahOS evaluates the result automatically. Formula parameters can reference values across packages using a package index.

:::caution
Editing formulas is a sensitive operation restricted to authorised users. Only users with the appropriate role may add or change a parameter formula.
:::

## Critical parameters

A parameter can be flagged as a **critical parameter**. Combined with the out-of-range interpretation categories (`IC2`, `IC3`, `IC5`, `IC6`, `IC7`) or a `CRITICAL` interpretation, this drives the **critical-result alerts** sent to pathologists. See [Turnaround Time & Alerts](./turnaround-time-and-alerts.md).

## Per-test settings

When creating or editing a test (under Manage Test) you can configure, in addition to parameters:

- **Specimen / Sample type** and **Container type** — picked from the lab master option lists (types: `SPECIMEN`, `CONTAINER`). New values can be added inline.
- **Barcode identifier** — suffix used to generate a per-test specimen barcode (see [Sample & Barcode Tracking](./sample-and-barcode-tracking.md)).
- **Turnaround time (TAT)** — see [Turnaround Time & Alerts](./turnaround-time-and-alerts.md).
- **No-table report** — render the report as free text instead of a parameter table.
- **Reference files** — attach reference images/files to the test.
- **External mapping ID** — used by the External LIS integration (see [Sending Reports](./sending-reports.md)).
- **Methodology** — the method used to perform the test, chosen from a dropdown; new methodologies can be created inline.

## Exporting a test definition

The **Manage Test** screen has an **Export** action on a test, which downloads its full definition — parameters, reference ranges, interpretation categories, units and per-test settings.

:::tip
Export a well-built test before making significant changes to it, so you have a record of the definition that produced your existing reports.
:::

## Matching analyser values

Values pushed from an analyser are matched to the right parameter by **machine code**. Each parameter that should be filled from a machine is flagged to use machine data and given its machine code.

Where a test produces several specimens, the incoming value is also matched on the **barcode identifier**, so a value lands on the specimen it was actually run from rather than on the first test of the bill.
