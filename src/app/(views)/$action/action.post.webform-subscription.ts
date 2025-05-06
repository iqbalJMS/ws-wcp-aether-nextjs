'use server';

import { API_PostWebFormSubscription } from '@/api/webform/api.post.webform-subscription';
import { T_FormSubscriptionRequest } from '@/api/webform/api.post.webform-subscription.type';

export async function ACT_PostWebFormSubscription(
  request: T_FormSubscriptionRequest
) {
  return await API_PostWebFormSubscription(request);
}
