'use client';

import { Call } from '@strix/client';
import {
  validateEmail,
  validateEmpty,
} from '@/lib/functions/global/validation';

import { T_PostResponse } from '@/api/common/fetch.type';
import {
  T_FormSubscriptionRequest,
  T_FormResult,
} from '@/api/webform/api.post.webform-subscription.type';
import { ACT_PostWebFormSubscription } from '@/app/(views)/$action/action.post.webform-subscription';

export function CFN_PostWebFormSubscription(
  transit: Call,
  data: T_FormSubscriptionRequest,
  // eslint-disable-next-line no-unused-vars
  onSuccess?: (data: T_PostResponse<T_FormResult> | undefined) => void
) {
  transit(async () => {
    const actionResult = await ACT_PostWebFormSubscription(data);
    if (onSuccess) {
      onSuccess(actionResult);
    }
  });
}

export function CFN_MapToWebFormSubscriptionPayload(
  form: T_FormSubscriptionRequest
): T_FormSubscriptionRequest {
  return {
    webform_id: form.webform_id,
    email: form.email,
    type: form.type,
  };
}

export function CFN_ValidateCreateWebFormSubscriptionFields(
  name: keyof T_FormSubscriptionRequest,
  value: any
): string {
  switch (name) {
    case 'webform_id':
      return '';
    case 'email':
      return validateEmail(value);
    case 'type':
      return validateEmpty(value, 'Wajib di isi');
    default:
      return '';
  }
}
