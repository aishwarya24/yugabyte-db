/*
 * Created on Fri Jan 05 2024
 *
 * Copyright 2021 YugaByte, Inc. and Contributors
 * Licensed under the Polyform Free Trial License 1.0.0 (the "License")
 * You may not use this file except in compliance with the License. You may obtain a copy of the License at
 * http://github.com/YugaByte/yugabyte-db/blob/master/licenses/POLYFORM-FREE-TRIAL-LICENSE-1.0.0.txt
 */

import * as yup from 'yup';
import { TFunction } from 'i18next';
import { RestoreContext } from '../../restore/RestoreContext';
import { AdvancedGeneralConfigs } from './GeneralConfigurations';

export const getAdvancedRestoreValidationSchema = (restoreContext: RestoreContext, t: TFunction) => {
    const {
        formData: { preflightResponse }
    } = restoreContext;

    let validationSchema = yup.object<Partial<AdvancedGeneralConfigs>>({
        forceKeyspaceRename: yup.boolean().required(),

        parallelThreads: yup.number(),
        renameKeyspace: yup.boolean(),
        apiType: yup
            .object()
            .shape({
                label: yup.string(),
                value: yup.string()
            })
            .nullable()
            .required(),

        backupLocation: yup.string().required(),

        backupStorageConfig:  yup
        .object()
        .shape({
            label: yup.string(),
            value: yup.string()
        })
        .nullable()
        .required(),

        databaseName: yup.string().required(),

        targetUniverse: yup
            .object()
            .shape({
                label: yup.string(),
                value: yup.string()
            })
            .nullable()
            .required()
    });

    if (preflightResponse?.hasKMSHistory) {
        validationSchema = validationSchema.shape({
            kmsConfig: yup
                .object()
                .shape({
                    label: yup.string(),
                    value: yup.string()
                })
                .nullable()
                .required(
                    t(
                        'newRestoreModal.generalSettings.universeSelection.validationMessages.kmsConfigRequired'
                    )
                )
        });
    }

    return validationSchema;
};
