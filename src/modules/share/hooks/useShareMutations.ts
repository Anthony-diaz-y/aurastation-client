import { useCallback, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import {
  SHARE_CREATE_ENDPOINT,
  SHARE_DELETE_ENDPOINT,
  SHARE_LOG_DETAIL_ENDPOINT,
} from "../constants/share.constants";
import type {
  SearchUserResult,
  SharedLogDetailResponse,
} from "../interfaces/share.interfaces";

interface SubmitSharePayload {
  recipient: SearchUserResult;
  shareDate: string;
  logId: number | null;
}

interface UseShareMutationsOptions {
  onShareSuccess: () => void;
  onDeleteSuccess: () => void;
}

export function useShareMutations({
  onShareSuccess,
  onDeleteSuccess,
}: UseShareMutationsOptions) {
  const [isSubmittingShare, setIsSubmittingShare] = useState(false);
  const [isLoadingDetail, setIsLoadingDetail] = useState(false);

  const createShare = useCallback(
    async ({ recipient, shareDate, logId }: SubmitSharePayload) => {
      try {
        setIsSubmittingShare(true);
        await axios.post(
          SHARE_CREATE_ENDPOINT,
          {
            recipientId: recipient.id,
            sharedDate: shareDate,
            logId,
          },
          { withCredentials: true },
        );
        toast.success(
          `Datos compartidos con éxito por correo con ${
            recipient.name || recipient.email
          }`,
        );
        onShareSuccess();
      } catch (error) {
        console.error("Error creating sharing:", error);
        toast.error("Error al compartir el ritmo cardíaco");
      } finally {
        setIsSubmittingShare(false);
      }
    },
    [onShareSuccess],
  );

  const deleteShare = useCallback(
    async (id: number, name: string) => {
      if (!confirm(`¿Estás seguro de dejar de compartir con ${name}?`)) return;
      try {
        await axios.delete(SHARE_DELETE_ENDPOINT(id), { withCredentials: true });
        toast.success("Has dejado de compartir con este usuario");
        onDeleteSuccess();
      } catch (error) {
        console.error("Error deleting share:", error);
        toast.error("Error al eliminar relación de compartir");
      }
    },
    [onDeleteSuccess],
  );

  const fetchSharedLogDetail = useCallback(
    async (
      relId: number,
      sender: SearchUserResult,
    ): Promise<{ log: SharedLogDetailResponse; user: SearchUserResult } | null> => {
      try {
        setIsLoadingDetail(true);
        const res = await axios.get(SHARE_LOG_DETAIL_ENDPOINT(relId), {
          withCredentials: true,
        });
        return { log: res.data, user: sender };
      } catch (error) {
        console.error("Error fetching report detail:", error);
        toast.error("Error al cargar los detalles del reporte compartido");
        return null;
      } finally {
        setIsLoadingDetail(false);
      }
    },
    [],
  );

  return {
    isSubmittingShare,
    isLoadingDetail,
    createShare,
    deleteShare,
    fetchSharedLogDetail,
  };
}